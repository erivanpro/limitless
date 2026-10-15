def rech_dicho(L,ileft,iright,v):
    if iright - ileft < 2 :
        if L[ileft] == v : return ileft
        if iright != ileft and L[iright] == v : return iright
        return -1

    imid = (ileft+iright)//2
    if L[imid] == v : return imid
    if L[imid] <  v : return rech_dicho(L,imid+1,iright,v)
    if L[imid] >  v : return rech_dicho(L,ileft,imid-1,v)

# tests
L = [ 0,2,3,4,5,6,7,8,9,11,15]
for v in L :
  print(rech_dicho(L,0,len(L)-1,v))
