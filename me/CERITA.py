import random,time
st=random.choice
a='cerita lain'
b='masalah'
c='klimaks'
d='intro'
e='penyelesaian masalah dengan masalah baru'
f='pengenalan latar/tokoh'
g='misteri'
h='penyemangat'
i='komedi'
j='pejelasan'
#Sifat Dan Emosi
aa='Marah'
bb='Tertawa'
cc='Bahagia'
dd='Dendam'
ff='Senyum'
gg='Menangis'
ii='Sedih'
hh='Terdiam'
jj='Benci'
ll='Sombong'
mm='Bangga'
ee='Murung'
#Aktifitas
k='Membantu'
l='Memukul'
m='Berlari'
n='Berjalan'
o='Terluka'
p='Menendang'
q='Bicara'
t='Membunuh'
r='Menyiksa'
s='Menyesal'
u='Sakit'
v='menuju'

#Lokasi
lk=list()
ggg=input('Masukkan Lokasi : ')
lk.append(ggg)
#Tokoh
tokoh=list()
kkk=input('Masukkan Tokoh Utama : ')
tokoh.append(kkk)
while True:
	alur=(a,b,c,d,e,f,g,h,i,j)
	emo=(aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,ll,mm)
	akt=(k,l,m,n,o,p,q,t,r,s,u,v)
	
	try:
		eee=st(alur)
		ai=st(tokoh)
		ak=st(akt)
		em=st(emo)
		lks=st(lk)
		if eee==j:
			print('LOKASI : ',lks)
		if ak == t:
			re=st(tokoh)
			print(re,' MATI')
			tokoh.remove(re)
			print(eee.upper(),' :\n',ai,ak.upper(),re,em)
		if eee == f:
			oi=input('Tokoh Baru : ')
			tokoh.append(oi)
		if eee ==a:
			llk=input('Lokasi Baru : ')
			lk.append(llk)
		if ak== r:
			oop=st(tokoh)
			print(eee.upper(),' :\n',ai,ak,oop,', ',em)
		if ak == v:
			print(eee.upper(),'\n',ai,ak,' ke ',lks,'dengan',em)
		else:
			print(eee.upper(),' :\n',ai,ak,', Dengan ',em)
	except Exception as w:
		print('Kesalahan : ',w)
		print('TAMAT!!')
		break
	time.sleep(3)
	