#! /usr/bin/env python
# -*- coding=utf-8 -*-
import urllib.request as req
url="http://s1.mde.nfu.edu.tw:8000/?semester=1082&courseno=0767"
with req.urlopen(url) as response:
     data=response.read().decode(utf-8)
     print(data)


import random
#random.shuffle的函数原型为：random.shuffle(x[, random])，用于将一个列表中的元素打乱。如:
persons = ["http://s1.mde.nfu.edu.tw:8000/?semester=1082&courseno=0767"] 
random.shuffle(persons) 
i=1;
print("")  
for person in persons: 
    if i==1 :
        print(">>>>>>小组A")  
    elif i==6:
        print("")
        print(">>>>>>小组B")  
    print("  "+person)
    i=i+1
