## MFE404 HW2 : evtstudy
*by Jeffrey Chen*

We are interested to learn how stocks perform in terms of excess
rates of return when they are actually paying a dividend. (The cum to
ex-dates are noted for each stock in CRSP.) What happened to the
stock return (minus the S&P500 on the same day) from days -20
through day +20, each day by day? Line up all stock excess returns
on the event dates, and calculate the mean across all stock-days.
This is the day 0 event mean excess rate of return. Eventually, your
result will be 41 mean excess rates of return, that you can graph with
relative day on the x-axis and mean rate of return (across all excess
returns) on the y-axis. You can do this assignment only for calendar
years after 2010 to make it simpler. (O: How does each stock's rate
of return relate to the amount of the dividend it actually paid?).

## Result and Summary

The annoucement of dividend and the payout often impact on the stock price. Due to it requires investor to purchase a security before it's ex-dividend date in order to receive its next dividend payment, it often cause the stock price to increase, the willingness to buy it at premium. And on the ex-date the price would drop, due to the company payout dividend. However, it's hard to obtain real gain from dividend stripping, by buying a stock before ex-dividend date and selling right after. Because the price of a security drops by about the same value of the dividend, buying it right before the ex-dividend date shouldn’t result in any gains. And also there are two brokerage fees you would have to pay for the buy and sell transactions. Therefore, the mean rate of return wouldn't have too much change before and after the ex-dividend date. And the arbitrage opportuniy to gain the profits from finding the under/overvalue stock relative to SP500 at ex-date can hardly exist. As showing in the figure the excess rate of return seems to don't hold any relationship with ex-date.


How does each stock's rate of return relate to the amount of the dividend it actually paid?

As mention above, the stock's ror should have similar decrease amount to it's dividend amount, it makes sense because the dividend comes from the company’s reserves



## Data Access and WRDS usage note

In this hw, I use all the stock in the CRSP dataset. Add the Query Conditional Statements to select only the declaration date for each stock. 

And we extract the permno and declaration date for each stock and save it into txt file with the required format for CRSP tool input.

Use the outpue file in WRDS-CRPS tool: **Daily Extract with Time Window**
we can direct query the data with time window +/-20 days from our declaration date


Data reference:

- crsp_all: WRDS - CRSP - Daily Stock File (all permno)
- crsp_all_window: WRDS - CRSP - Tool - Daily Extract with Time Window (+20/-20 calendar date)



```python
crsp_all = pd.read_csv("./crsp_all.csv")
```


```python
#grab the column we want and save it into txt file 
crsp_permno_date = crsp_all.loc[:, ['PERMNO','DCLRDT']]
crsp_permno_date['DCLRDT'] = crsp_permno_date['DCLRDT'].astype(int)
crsp_permno_date.to_csv(r'crsp_permon_date.txt', header=None, index=None, sep=' ', mode='a')
```

## Computation Code


```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt 
%matplotlib inline
```


```python
csrp_all_window = pd.read_csv('./crsp_all_window.csv')
```

    /Users/jeffreychen/opt/anaconda3/lib/python3.8/site-packages/IPython/core/interactiveshell.py:3071: DtypeWarning: Columns (4) have mixed types.Specify dtype option on import or set low_memory=False.
      has_raised = await self.run_ast_nodes(code_ast.body, cell_name,



```python
csrp_all_window_raw = csrp_all_window
```


```python
csrp_all_window.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>DATE</th>
      <th>PERMNO</th>
      <th>event_date</th>
      <th>PRC</th>
      <th>RETX</th>
      <th>vwretd</th>
      <th>vwretx</th>
      <th>sprtrn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>20091127</td>
      <td>10001</td>
      <td>16DEC2009</td>
      <td>8.8060</td>
      <td>-0.001587</td>
      <td>-0.018563</td>
      <td>-0.018785</td>
      <td>-0.017233</td>
    </tr>
    <tr>
      <th>1</th>
      <td>20091130</td>
      <td>10001</td>
      <td>16DEC2009</td>
      <td>8.8980</td>
      <td>0.010447</td>
      <td>0.003921</td>
      <td>0.003805</td>
      <td>0.003793</td>
    </tr>
    <tr>
      <th>2</th>
      <td>20091201</td>
      <td>10001</td>
      <td>16DEC2009</td>
      <td>8.8500</td>
      <td>-0.005394</td>
      <td>0.013976</td>
      <td>0.013938</td>
      <td>0.012075</td>
    </tr>
    <tr>
      <th>3</th>
      <td>20091202</td>
      <td>10001</td>
      <td>16DEC2009</td>
      <td>8.8816</td>
      <td>0.003571</td>
      <td>0.002319</td>
      <td>0.002209</td>
      <td>0.000343</td>
    </tr>
    <tr>
      <th>4</th>
      <td>20091203</td>
      <td>10001</td>
      <td>16DEC2009</td>
      <td>9.0000</td>
      <td>0.013331</td>
      <td>-0.008945</td>
      <td>-0.008971</td>
      <td>-0.008402</td>
    </tr>
  </tbody>
</table>
</div>




```python
#convert into datetime 
csrp_all_window['event_date'] = pd.to_datetime(csrp_all_window['event_date'])
csrp_all_window['DATE'] =  pd.to_datetime(csrp_all_window['DATE'].astype(str))
#convert to float
csrp_all_window['RETX'] = pd.to_numeric(csrp_all_window['RETX'], errors='coerce')
#calculate the day difference
csrp_all_window['window'] =  csrp_all_window['DATE'] - csrp_all_window['event_date']
csrp_all_window['window']  = csrp_all_window['window'].dt.days

#calculate the excess return
csrp_all_window['exretx'] = csrp_all_window['RETX']- csrp_all_window['sprtrn']
csrp_all_window['vwexretx'] = csrp_all_window['vwretd']- csrp_all_window['sprtrn']
```


```python
hw2out = csrp_all_window.loc[csrp_all_window['PERMNO']<10100]
```


```python
hw2out.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>DATE</th>
      <th>PERMNO</th>
      <th>event_date</th>
      <th>PRC</th>
      <th>RETX</th>
      <th>vwretd</th>
      <th>vwretx</th>
      <th>sprtrn</th>
      <th>window</th>
      <th>exretx</th>
      <th>vwexretx</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2009-11-27</td>
      <td>10001</td>
      <td>2009-12-16</td>
      <td>8.8060</td>
      <td>-0.001587</td>
      <td>-0.018563</td>
      <td>-0.018785</td>
      <td>-0.017233</td>
      <td>-19</td>
      <td>0.015646</td>
      <td>-0.001330</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2009-11-30</td>
      <td>10001</td>
      <td>2009-12-16</td>
      <td>8.8980</td>
      <td>0.010447</td>
      <td>0.003921</td>
      <td>0.003805</td>
      <td>0.003793</td>
      <td>-16</td>
      <td>0.006654</td>
      <td>0.000128</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2009-12-01</td>
      <td>10001</td>
      <td>2009-12-16</td>
      <td>8.8500</td>
      <td>-0.005394</td>
      <td>0.013976</td>
      <td>0.013938</td>
      <td>0.012075</td>
      <td>-15</td>
      <td>-0.017469</td>
      <td>0.001901</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2009-12-02</td>
      <td>10001</td>
      <td>2009-12-16</td>
      <td>8.8816</td>
      <td>0.003571</td>
      <td>0.002319</td>
      <td>0.002209</td>
      <td>0.000343</td>
      <td>-14</td>
      <td>0.003228</td>
      <td>0.001976</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2009-12-03</td>
      <td>10001</td>
      <td>2009-12-16</td>
      <td>9.0000</td>
      <td>0.013331</td>
      <td>-0.008945</td>
      <td>-0.008971</td>
      <td>-0.008402</td>
      <td>-13</td>
      <td>0.021733</td>
      <td>-0.000543</td>
    </tr>
  </tbody>
</table>
</div>




```python
hw2out = csrp_all_window.loc[csrp_all_window['window'] == -20]

```


```python
hw2out
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>DATE</th>
      <th>PERMNO</th>
      <th>event_date</th>
      <th>PRC</th>
      <th>RETX</th>
      <th>vwretd</th>
      <th>vwretx</th>
      <th>sprtrn</th>
      <th>window</th>
      <th>exretx</th>
      <th>vwexretx</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>26</th>
      <td>2010-01-08</td>
      <td>10001</td>
      <td>2010-01-28</td>
      <td>10.3400</td>
      <td>0.038153</td>
      <td>0.004171</td>
      <td>0.004171</td>
      <td>0.002882</td>
      <td>-20</td>
      <td>0.035271</td>
      <td>0.001289</td>
    </tr>
    <tr>
      <th>49</th>
      <td>2010-02-10</td>
      <td>10001</td>
      <td>2010-03-02</td>
      <td>10.0000</td>
      <td>-0.021536</td>
      <td>-0.001455</td>
      <td>-0.001744</td>
      <td>-0.002233</td>
      <td>-20</td>
      <td>-0.019303</td>
      <td>0.000778</td>
    </tr>
    <tr>
      <th>75</th>
      <td>2010-03-11</td>
      <td>10001</td>
      <td>2010-03-31</td>
      <td>10.0001</td>
      <td>-0.002305</td>
      <td>0.004048</td>
      <td>0.003691</td>
      <td>0.004042</td>
      <td>-20</td>
      <td>-0.006347</td>
      <td>0.000006</td>
    </tr>
    <tr>
      <th>103</th>
      <td>2010-04-08</td>
      <td>10001</td>
      <td>2010-04-28</td>
      <td>10.3305</td>
      <td>-0.008342</td>
      <td>0.002902</td>
      <td>0.002864</td>
      <td>0.003374</td>
      <td>-20</td>
      <td>-0.011716</td>
      <td>-0.000472</td>
    </tr>
    <tr>
      <th>133</th>
      <td>2010-05-06</td>
      <td>10001</td>
      <td>2010-05-26</td>
      <td>10.9000</td>
      <td>-0.037952</td>
      <td>-0.032889</td>
      <td>-0.033015</td>
      <td>-0.032378</td>
      <td>-20</td>
      <td>-0.005574</td>
      <td>-0.000511</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>5042428</th>
      <td>2019-04-26</td>
      <td>93429</td>
      <td>2019-05-16</td>
      <td>101.5500</td>
      <td>-0.001867</td>
      <td>0.005421</td>
      <td>0.005373</td>
      <td>0.004685</td>
      <td>-20</td>
      <td>-0.006552</td>
      <td>0.000736</td>
    </tr>
    <tr>
      <th>5042456</th>
      <td>2019-07-11</td>
      <td>93429</td>
      <td>2019-07-31</td>
      <td>113.0000</td>
      <td>0.011638</td>
      <td>0.001359</td>
      <td>0.001344</td>
      <td>0.002285</td>
      <td>-20</td>
      <td>0.009353</td>
      <td>-0.000926</td>
    </tr>
    <tr>
      <th>5042485</th>
      <td>2019-10-10</td>
      <td>93429</td>
      <td>2019-10-30</td>
      <td>117.0800</td>
      <td>-0.000598</td>
      <td>0.005681</td>
      <td>0.005651</td>
      <td>0.006416</td>
      <td>-20</td>
      <td>-0.007014</td>
      <td>-0.000735</td>
    </tr>
    <tr>
      <th>5042514</th>
      <td>2012-10-23</td>
      <td>93431</td>
      <td>2012-11-12</td>
      <td>10.1300</td>
      <td>-0.003933</td>
      <td>-0.013019</td>
      <td>-0.013102</td>
      <td>-0.014444</td>
      <td>-20</td>
      <td>0.010511</td>
      <td>0.001425</td>
    </tr>
    <tr>
      <th>5042540</th>
      <td>2011-05-24</td>
      <td>93435</td>
      <td>2011-06-13</td>
      <td>2.6600</td>
      <td>-0.014815</td>
      <td>-0.000604</td>
      <td>-0.000612</td>
      <td>-0.000827</td>
      <td>-20</td>
      <td>-0.013988</td>
      <td>0.000223</td>
    </tr>
  </tbody>
</table>
<p>142057 rows × 11 columns</p>
</div>




```python
feature = ['PERMNO','DATE','exretx']
```


```python
hw2out = hw2out[feature]
```


```python
hw2out.columns = ['PERMNO', 'date', 'ret0']
```


```python
hw2out.to_csv('hw2_data_out.csv')  
```


```python
hw2out
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>PERMNO</th>
      <th>date</th>
      <th>ret0</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>26</th>
      <td>10001</td>
      <td>2010-01-08</td>
      <td>0.035271</td>
    </tr>
    <tr>
      <th>49</th>
      <td>10001</td>
      <td>2010-02-10</td>
      <td>-0.019303</td>
    </tr>
    <tr>
      <th>75</th>
      <td>10001</td>
      <td>2010-03-11</td>
      <td>-0.006347</td>
    </tr>
    <tr>
      <th>103</th>
      <td>10001</td>
      <td>2010-04-08</td>
      <td>-0.011716</td>
    </tr>
    <tr>
      <th>133</th>
      <td>10001</td>
      <td>2010-05-06</td>
      <td>-0.005574</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>5042428</th>
      <td>93429</td>
      <td>2019-04-26</td>
      <td>-0.006552</td>
    </tr>
    <tr>
      <th>5042456</th>
      <td>93429</td>
      <td>2019-07-11</td>
      <td>0.009353</td>
    </tr>
    <tr>
      <th>5042485</th>
      <td>93429</td>
      <td>2019-10-10</td>
      <td>-0.007014</td>
    </tr>
    <tr>
      <th>5042514</th>
      <td>93431</td>
      <td>2012-10-23</td>
      <td>0.010511</td>
    </tr>
    <tr>
      <th>5042540</th>
      <td>93435</td>
      <td>2011-05-24</td>
      <td>-0.013988</td>
    </tr>
  </tbody>
</table>
<p>142057 rows × 3 columns</p>
</div>




```python

```


```python
#group by window and take the average 
crsp_div_day_diff_mean= csrp_all_window.dropna().groupby(['window']).mean()

```


```python

y = crsp_div_day_diff_mean['exretx']
x = crsp_div_day_diff_mean.index

fig, ax = plt.subplots(figsize=(10, 4))
ax.plot(x, y, 'o', color='tab:brown')
ax.plot(x, y, '-', color='maroon')

limits = max( abs(y) )
ax.set_ylim( [-limits*1.5, limits*1.5] )

ax.set_xlabel('Relative day from Ex-Dividend date')  # Add an x-label to the axes.
ax.set_ylabel('Excess rates of return')  # Add a y-label to the axes.
ax.set_title("Stock excess returns on the event dates")  # Add a title to the axes.
```




    Text(0.5, 1.0, 'Stock excess returns on the event dates')




    
![svg](output_22_1.svg)
    

