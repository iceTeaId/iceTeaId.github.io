import os
import random
from datetime import  datetime
tm=datetime.now()
def waktu_sekarang():
	try:
		now = datetime.now()
		bulan=now.month
		bln=int(bulan-1)
		dt=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
		e=dt[int(bln)]
		pr="\rTanggal : %s %s %s / Jam : %s:%s:%s " % (now.day,e,now.year,now.hour,now.minute, now.second)
		return pr
	except:
		print('Tanggal tak bisa Diakses!!')
		waktu_sekarang()
	
def buka_gambar(gambar):
	try:
		file=open(gambar,'r')
	except UnicodeDecodeError:
		file=open(gambar,'r')
	ii=file.read()
	return ii
	file.close()
	
def simpan(filenya,namafile):
	import time
	try:
		file = open(namafile,'w')
		file.write(filenya)
	except TypeError as e:
		file = open(namafile,'wb+')	
		file.write(filenya)
	file.close()
	print('tersimpan di ',namafile)
	buka_gambar(namafile)

def lop():
	while True:
		os.system('clear')
		print('Selamat Datang Di Tempat Penyimpanan Password!!')
		print('\rPilih 1 : lihat password tersimpan')
		print('Pilih 2 : Tambah pass')
		print('Pilih 3 : Buat file')
		print('Pilih 4 : Hapus SEMUA Password : ')
		pil=input('\nPilihan :')
		
		if pil == str(1):
			lih='pwd.txt'
			print('Isi dari ',lih,'\n',buka_gambar(str(lih)))
		if pil==str(3):
			isi=input('Isi File : ')
			isi2=waktu_sekarang()+'\n'+isi
			nam=input('Nama File? namaFile.extensi : ')
			simpan(isi2,nam)
		if pil ==str(2):
			web=input('Webnya? : ')
			em=input('Email/Hp : ')
			pas=input('Paswod : ')
			
			fl=open('pwd.txt','a')
			fl.write(waktu_sekarang()+'\nSITUS : '+web+'\nEMAIL/HP : '+em+'\nPASSWORD : '+pas+'\n')
	
			fl.close()
			print('\nTersimpan di pwd.txt')
		if pil==str(4):
			while True:
					an=input('Nama File : ')
					rd=random.choice
					ls=(1,2,3,4,5,6,7,8,9,0)
					ang=rd(ls)
					angka=int(tm.microsecond)*int(ang)
					try:
						kon=input('Konfirmasi Dengan Menulis Kode Berikut ('+str(angka)+') : ')
						if kon == str(angka):
							print('Terhapus!')
							simpan('',an)
							break
						else:
							print('Kode Salah!!')
					except Exception:
						pass
			
			
		pr=str(input('\nLanjutkan? y/n : '))
		if pr == 'y':
			lop()
		if pr=='n':
			break

lop()
