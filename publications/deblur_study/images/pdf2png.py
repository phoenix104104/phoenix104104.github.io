import os,sys

attribute = ["all", "manmade", "natural", "people", 'saturated', 'text']
#attribute = ["all"]
dataset = ["real", "uniform", "nonuniform"]

for d in dataset:
    for a in attribute:
        filename = "significance_test/significance_test_%s_%s" %(d, a)
        pdf = '%s.pdf' %filename
        png = '%s.jpg' %filename

        #cmd = "convert -density 200 %s -background white -alpha remove -trim -quality 100 %s" %(pdf, png)
        cmd = "convert -density 200 %s -trim -quality 100 %s" %(pdf, png)
        print cmd
        os.system(cmd)

#name = sys.argv[1]
#ext = name.split('.')[-1]
#name = name.split('.')[0]
#
#pdf = '%s.%s' %(name, ext)
#png = '%s.png' %(name)
#
#cmd = "convert -density 200 %s -background white -alpha remove -trim -quality 100 %s" %(pdf, png)
#print cmd
#os.system(cmd)