jen=int(input())
jum=int(input())
har=jum*10000
dis=0
#diskon berdasarkan jenis pembayaran
if jen==1: dis=har*0.1
else: dis=har*0.2

#diskon berdasarkan jumlah beli
if har>=100000: dis=dis+har*0.1

print(har,int(dis),int(har-dis),sep="\n")
