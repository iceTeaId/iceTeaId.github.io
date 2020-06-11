import subprocess,time

process = subprocess.run(['cd'], shell=True, check=True, stdout=subprocess.PIPE, universal_newlines=True)
output = process.stdout
print('nomer 1 :',output)
print('-'*50)
time.sleep(2)

oo=subprocess.run('ls',check=True)
print('check :',oo)
print('*'*50)
time.sleep(2)

oi=subprocess.run(['git','init'],stdout=subprocess.PIPE,universal_newlines=True)
oi=oi.stdout
print('Pipe + newlines :',str(oi))
print('+'*50)
time.sleep(2)

e=subprocess.run(['ls'],stdout=subprocess.PIPE)
print('-'*50)
ee=e.stdout
print('byte :',ee)
time.sleep(2)

cp = subprocess.run(["ls"], universal_newlines=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
print('newlines + stdout + stdrr :',cp)
print('='*50)
