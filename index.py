import pandas as pd

df = pd.DataFrame(columns = ['Column1'])

df.loc[len(df.index)] = [1]
df.to_csv('/Users/peteratsaves/Desktop/Projects/index.csv')
df.to_csv('/Users/peteratsaves/Desktop/Projects/index2.csv')