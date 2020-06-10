import json
import re
import urllib2

text = urllib2.urlopen('http://dcsd.nutrislice.com/menu/meadow-view/lunch/').read()
menu = json.loads(re.search(r"bootstrapData\['menuMonthWeeks'\]\s*=\s*(.*);", text).group(1))

print menu
