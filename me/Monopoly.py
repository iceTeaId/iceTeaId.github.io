import time as tm
from random import choice as rd

class Player():
	def __init__(self,name):
		self.rumah = 0
		self.name=name.upper()
		self.money=50000
		self.mj,self.lap=0,1
		self.putaran=0
	
			
class Start(Player):
	def main(self):
		dadu=(2,3,4,5,6,7,8,9,10,11,12)
		while True:
			if self.money <= 0:
				print(self.name,'Kalah')
				break
				
			aarea=list(range(1,37))*self.lap
			rand=rd(dadu)
			self.mj += rand
			base=aarea[self.mj]
			tm.sleep(1)
			self.lap+=1
			print('%s Maju %s Langkah di %s '%(self.name,rand,base))
			self.area(base) #BASE
			break
		
	def area(self,areaa):
		area1=(2,3,4,5,6,7,8,9)
		area2=(11,12,13,14,15,16,17,18,19)
		area3=(21,22,23,24,25,26,27,28,29)
		area4=(31,32,33,34,35,36)
		if areaa in area1:
			areaa=areaa*100
			self.money=self.money-areaa
			print('Uang %s = %s'%(self.name,self.money))
			self.sekarang(areaa)
		elif areaa in area2:
			areaa=areaa*100
			self.money=self.money-areaa
			print('Uang %s = %s'%(self.name,self.money))
			self.sekarang(areaa)
		elif areaa in area3:
			areaa=areaa*100
			self.money=self.money-areaa
			print('Uang %s = %s'%(self.name,self.money))
			self.sekarang(areaa)
		elif areaa in area4:
			areaa=areaa*100
			self.money=self.money-areaa
			print('Uang %s = %s'%(self.name,self.money))
			self.sekarang(areaa)
		else:
			if areaa == areaa:
				self.sekarang(areaa)
				
	def sekarang(self,a):
		if a == 1:
			print('%s 3x Mampir Start Penjara'%(self.name))
			print('Uang %s %s'%(self.name,self.money))
		elif a== 10:
			print('%s Dipenjara'%(self.name))
			print('Untuk keluar Penjara dadu harus 12')
		elif a==20:
			print('%s Masuk Tempat istirahat'%(self.name))
		elif a == 30:
			print('%s Masuk Parkir bebas'%(self.name))
			
			
		
		

def info(self):
	inf = {
	'rumah':self.rumah,
	'nama':self.name,
	'uang':self.money
	}
	print(inf)
		
class Com(Start):
	def player(self,name):
		self.name=name
class Play(Start):
	def player(self,name):
		self.name=name
		

b=Com('Jancok')
a=Com('kampang')
c=Com('konyol')
d=Play('ooooo')
while True:
	b.main()
	c.main()
	tm.sleep(1)