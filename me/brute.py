import math,os

def mt(a,b):
	pp=math.pow(a,b)
	return int(pp)
	
def brute2():
	import itertools,sys
	while True:
		try:
			print('SELAMAT DATANG DI PEMBUATAN BRUTEFORCE!!')
			print('[1] Manual (Sebentar) Dalam tahap pengenbangan !')
			print('[2] Manual (Lama)')
			print('[3] Otomatis (Lama)')
			msk=input('Pilihan Anda :')
			file=open('brute.txt','w')
			file.write('')
			file.close()
			if msk == '2':
			
				a=input("Enter kata :")
				c=input('Enter Nama Apapun :')
				d=input('Enter nomor :')
				e=input('Enter simbol :')
				b=int(input("Enter maksimum digit :"))
				kata=a+d+c+e+a.upper()+c.upper()
				res=itertools.product(a+c+d+e+a.upper()+c.upper(),repeat=b)
				lk=int(len(list(kata)))
				
				ll=0
				for i in res:
					rr=''
					if len(i) == b:
						ff=''.join(i)
						rr=rr+ff+'\n'
						if len(a) >= 9:
							ff=''.join(i)
							rr=rr+ff+'\n'
						persen=(ll+1)/(mt(lk,b)/40)
						#print(persen)
						os.system('clear')
						sys.stdout.write('\r'+'▣'*int(persen/2)+'▢'*(20-int(persen/2))+' '+str(ll+1)+'/'+str(mt(lk,b))+' Kata ')
						#sys.stdout.write(' \r%s/%s Kata '%(ll,mt(lk,b)))
					ll=ll+1
					file = open('brute.txt','a')
					file.write(rr)
					file.close()
				print('\nTersimpan di brute.txt!')
			elif msk == '3':
				import string
				b=int(input('Enter digit maksimal :'))
				code=itertools.product(string.ascii_letters+string.digits+string.punctuation,repeat=b)
				cod=string.ascii_letters+string.digits+string.punctuation
				kd=int(len(list(cod)))
				ll=0
				for i in code:
					rr=''
					if len(i) == b:
						ff=''.join(i)
						rr=rr+ff+'\n'
						if b >= 6:
							ff=''.join(i)
							rr=rr+ff+'\n'
						persen=(ll+1)/(mt(kd,b)/40)
						#print(persen)
						os.system('clear')
						sys.stdout.write('\r'+'▣'*int(persen/2)+'▢'*(20-int(persen/2))+' '+str(ll+1)+'/'+str(mt(kd,b))+' Kata ')
						#sys.stdout.write(' \r%s Kata '%(ll))
					
					file = open('brute.txt','a')
					file.write(rr)
					file.close()
					ll=ll+1
				print('\nTersimpan di brute.txt')
			elif msk=='1':
				a=input("Enter kata :")
				c=input('Enter Nama Apapun :')
				d=input('Enter nomor :')
				e=input('Enter simbol :')
				#b=int(input('Digit Maksimal : '))
				#f=input('Huruf Besar? y/n :')
				pri=list()
				pri.append(a)
				pri.append(c)
				pri.append(d)
				pri.append(e)
				pri.append(a.upper())
				pri.append(c.upper())
				ll=1
				b=int(len(pri))
				
				for u in  pri:
					oo=''
					if len(u)==b:
						pp=''.join(u)
						oo=oo+pp+'\n'
						if b>=6:
							pp=''.join(u)
							oo=oo+pp+'\n'
					print(oo)
					
#					file = open('brute.txt','a')
#					#file.write(rr)
#					file.close()
					ll=ll+1
#				print('\nTersimpan di brute.txt')
		except Exception as a:
			print('Kesalahan : ',a)
				
		pr=str(input('\n(Input apa saja) Untuk Lanjutkan (n) Untuk stop. : '))
		if pr == 'y':
			brute2()
		if pr=='n':
			break
			
brute2()