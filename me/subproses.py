import subprocess

process = subprocess.run(['ifconfig'], shell=True, check=True, stdout=subprocess.PIPE, universal_newlines=True)
output = process.stdout

subprocess.check_call(['ls'])

e=subprocess.run(['cat','bendahara.txt'],check=True)
print('\n',e)

cp = subprocess.run(["ls","session"], universal_newlines=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

print(cp)
# '' (empty string)
print(cp.stderr)
# ls: cannot access 'foo bar': No such file or directory
print(cp.returncode)
# 2
