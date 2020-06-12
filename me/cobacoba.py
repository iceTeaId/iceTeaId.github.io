import time,os,subprocess,sys

def waktu_sekarang():
	try:
		from datetime import datetime
		now = datetime.now()
		bulan=now.month
		bln=int(bulan-1)
		dt=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
		e=dt[int(bln)]
		ii="\rTanggal : %s %s %s / Jam : %s:%s:%s " % (now.day,e,now.year,now.hour,now.minute, now.second)
	except:
		waktu_sekarang()
	return ii
		
def sisa_waktu(w):
	try:
		import sys,time
		for e in range(w+1):
			t = w-e
			l = '  Second              '
			sys.stdout.write('\rSisa Waktu : {0:0}'.format(t)+l)
			time.sleep(0.01)
	except Exception as ii:
		print(ii)

termux = '/data/data/com.termux/files/home/iceteaid.github.io'
web='/storage/emulated/0/proyekbaru/program web/web'

alamat='https://github.com/iceteaid/iceteaid.github.io.git'


def dire(dir):
	direc=''
	while True:
		os.chdir('..')#Mundur
		dr=os.getcwd()
		try:
			if str(dr)==direc:
				os.chdir(dir)
				try:
						#MASUK DIRECTORY
						qw=os.getcwd()
						break
				except Exception as uu:
						print('gagal',uu)
						break
		except Exception as ii:
			print('gagal masuk',dr,ii)
			break
		direc=str(dr)
	return qw

def ukuran_folder(directory):#UKURAN DIREKTORY
    """Returns the `directory` size in bytes."""
    total = 0
    try:
        # print("[+] Getting the size of", directory)
        for entry in os.scandir(directory):
            if entry.is_file():
                # if it's a file, use stat() function
                total += entry.stat().st_size
            elif entry.is_dir():
                # if it's a directory, recursively call this function
                total += ukuran_folder(entry.path)
    except NotADirectoryError:
        # if `directory` isn't a directory, get the file size then
        return os.path.getsize(directory)
    except PermissionError:
        # if for whatever reason we can't open the folder, return 0
        return 0
    return total

#PUSH
def push():
	berkas=subprocess.run(['ls'],stdout=subprocess.PIPE,universal_newlines=True)
	bks=berkas.stdout
	bk=str(bks).replace('\n',' ').replace('\t',' ')
	md=str(bk).split(' ')
	
	status=subprocess.run(['git','status'],stdout=subprocess.PIPE,universal_newlines=True)
	sss=status.stdout
	aa=str(sss).replace('\n',' ').replace('\t',' ')
	modif=str(aa).split(' ')
	
	check=subprocess.run(['git','checkout'],stdout=subprocess.PIPE,universal_newlines=True)
	g=check.stdout
	aa=str(g).replace('\n',' ').replace('\t',' ')
	mod=str(aa).split(' ')
	try:
		if 'push' in mod:
			subprocess.run(['git','config','--global','credential.helper','cache'],stdout=subprocess.PIPE,universal_newlines=True)
					
			ff=subprocess.run(['git','config','--global','credential.helper','cache --timeout=36000'],stdout=subprocess.PIPE,universal_newlines=True)
		try :
			if '.py' in md:
				sts=subprocess.run(['git','switch','python'],stdout=subprocess.PIPE,universal_newlines=True)
				dd=sts.stdout
			elif '.html' in md:
				sus=subprocess.run(['git','switch','master'],stdout=subprocess.PIPE,universal_newlines=True)
				pp=sus.stdout
		except:
			print('Make New Branch!')
				
		if 'commit' and 'add' in modif:
			subprocess.run(['git','add','.'],stdout=subprocess.PIPE,universal_newlines=True)
			subprocess.run(['git','commit','-am',"'Termux auto'"],stdout=subprocess.PIPE,universal_newlines=True)
			subprocess.run(['git','push'],stdout=subprocess.PIPE,universal_newlines=True)
			print('-'*50)
			print(waktu_sekarang())
			print('Berhasil Push')
	except:
		print('Gagal Push')
		pindah()
			 
def pindah():
	jm=''
	bt=''
	try:
		while True:
			try:
				oo=ukuran_folder(termux)
				ii=ukuran_folder(web)
				if jm != str(oo):
					dire(termux)
					push()
				if bt != str(ii):
					dire(web)
					push()
			except Exception as uu:
				print('Fail',uu)
				break
			jm=str(oo)
			bt=str(ii)
			sisa_waktu(600)
	except Exception as iip:
		print('Something Wrong!',iip)
		pindah()

pindah()
		