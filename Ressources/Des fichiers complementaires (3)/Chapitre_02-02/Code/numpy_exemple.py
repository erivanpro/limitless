'''
import numpy as np

vecteur = np.array([1,2,3,4])
print("vecteur = ", vecteur)
'''
 

'''
import numpy as np

vecteur_2d = np.array([[1,2,3,4],[5,6,7,8]])
print("vecteru_2d = \n", vecteur_2d)
'''

 
'''
import numpy as np

vecteur_3d = np.array([[[1,1,1],[1,1,1]],[[2,2,2],[2,2,2]]])
print("vecteru_3d = \n", vecteur_3d)
'''

#=============================================================
''' 
import numpy as np

vecteur = np.array([1,2,3,4])
print("vecteur : ", vecteur)
print(f"le nombre de dimensions de vecteur = {vecteur.ndim}")
print(f"les dimensions du vecteur vecteur = {vecteur.shape}")
''' 

'''
import numpy as np

vecteur_3d = np.array([[[1,1,1,1],[1,1,1,1], [1,1,1,1]],[[2,2,2,2],[2,2,2,2],[2,2,2,2]]])
print("vecteur_3d : \n", vecteur_3d)
print(f"le nombre de dimensions de vecteur_3d = {vecteur_3d.ndim}")
print(f"les dimensions du vecteur vecteur_3d = {vecteur_3d.shape}")
'''


#=============================================================

'''
import numpy as np

vecteur_1 = np.array([[1,2,3,4],[5,6,7,8]], dtype='int16')
vecteur_2 = np.array([[1,2,3,4],[5,6,7,8]], dtype='int32')
vecteur_3 = np.array([[1,2,3,4],[5,6,7,8]], dtype='float')

print(f"- Le type de vecteur_1 = {type(vecteur_1)}\n" 
     +f"- Le type de vecteur_2 = {type(vecteur_2)}\n"
     +f"- Le type de vecteur_3 = {type(vecteur_3)}\n")

print(f"- Le type des éléments de vecteur_1 = {vecteur_1.dtype}\n" 
     +f"- Le type des éléments de vecteur_2 = {vecteur_2.dtype}\n"
     +f"- Le type des éléments de vecteur_3 = {vecteur_3.dtype}\n")
     
print(f"- Taille de chaque élément de vecteur_1 = {vecteur_1.itemsize} octets\n"
     +f"- Taille de chaque élément de vecteur_2 = {vecteur_2.itemsize} octets\n"
     +f"- Taille de chaque élément de vecteur_3 = {vecteur_3.itemsize} octets\n")
     
print(f"- Nombre d'éléments dans vecteur_1 = {vecteur_1.size}\n"
     +f"- Nombre d'éléments dans vecteur_2 = {vecteur_2.size}\n"
     +f"- Nombre d'éléments dans vecteur_3 = {vecteur_3.size}\n")

print(f"- Taille totale de vecteur_1 = {vecteur_1.nbytes} octets\n"
     +f"- Taille totale de vecteur_2 = {vecteur_2.nbytes} octets\n"
     +f"- Taille totale de vecteur_3 = {vecteur_3.nbytes} octets")

'''
#=============================================================

'''
import numpy as np
vecteur_1 = np.zeros(10) 
vecteur_2 = np.zeros(10, dtype='int32') 
vecteur_3 = np.ones((3,4), dtype='int16') 
print("vecteur_1 = ", vecteur_1)
print("vecteur_2 = ", vecteur_2)
print("vecteur_3 = \n", vecteur_3)
'''
#=============================================================

'''
import numpy as np
vecteur_1 = np.full((3,4), 5)
vecteur_2 = np.full_like(vecteur_1, 10)
vecteur_3 = np.identity(3)
print("vecteur_1 =\n ", vecteur_1)
print("vecteur_2 =\n", vecteur_2)
print("vecteur_3 = \n", vecteur_3)
'''


#=============================================================

"""  
import numpy as np

vecteur_1d = np.array([1,2,3,4,5,6,7,8,9,10])
print("vecteur_1d = ",vecteur_1d)
print("vecteur_1d[1] = ", vecteur_1d[1]) 
print("vecteur_1d[[1,3]] = ", vecteur_1d[[1,3]]) 
print("vecteur_1d[[0,-1]] = ", vecteur_1d[[0,-1]]) 
print("vecteur_1d[2:6] = ", vecteur_1d[2:6]) 
print("vecteur_1d[2:] = ", vecteur_1d[2:]) 
print("vecteur_1d[0:10:2] = ", vecteur_1d[0:10:2]) 
""" 
 
 
''' 
 
import numpy as np

vecteur_2d = np.array([[1,2,3],
                       [4,5,6],
                       [7,8,9],
                       [10,11,12],
                       [13,14,15]])

print("vecteur_2d[0,0] = ",vecteur_2d[0,0])                       
print("vecteur_2d[1,1] = ",vecteur_2d[2,1])                       
print("vecteur_2d[2,2] = ",vecteur_2d[4,2],"\n")                       
print("vecteur_2d[:,:] =\n ",vecteur_2d[:,:],"\n")                       
print("vecteur_2d[1,:] = ",vecteur_2d[1,:],"\n")                       
print("vecteur_2d[:,1] = ",vecteur_2d[:,1],"\n")                       
print("vecteur_2d[0:5:2,1] = ",vecteur_2d[0:5:2,1],"\n")
'''


'''
import numpy as np

vecteur_3d = np.array([[[1,0,0],[0,0,0]],
                       [[0,2,0],[0,0,3]]])
print("vecteru_3d[0,0,0] = ", vecteur_3d[0,0,0])
print("vecteru_3d[1,0,1] = ", vecteur_3d[1,0,1])
print("vecteru_3d[1,1,2] = ", vecteur_3d[1,1,2])
'''




#=============================================================
"""
import numpy as np

vecteur = np.array([[1,2,3],
                    [4,5,6],
                    [7,8,9]])

vecteur[1,1] = 99 
print("Après vecteur[1,1] = 99 le tableau devient:\n",vecteur, 
       end="\n\n")
vecteur[0,:] = 99
print("Après vecteur[0,:] = 99 le tableau devient:\n",vecteur, 
       end="\n\n")
vecteur[:,2] = -99
print("Après vecteur[:,2] = -99 le tableau devient:\n",vecteur, 
       end="\n\n")
"""

#=============================================================
'''
import numpy as np

vecteur_1 = np.array([1,2,3])
vecteur_2 = vecteur_1 
vecteur_2[2] = 99 
print("vecteur_1 =", vecteur_1)
print("vecteur_2 =", vecteur_2)
'''

#=============================================================
'''
import numpy as np

vecteur_1 = np.array([1,2,3])
vecteur_2 = vecteur_1.copy() 
vecteur_2[2] = 99 
print("vecteur_1 =", vecteur_1)
print("vecteur_2 =", vecteur_2)
'''



#=============================================================
 
""" 
import numpy as np

vecteur_1 = np.array([1,2,3,4,5])
print("vecteur_1 = ",vecteur_1)
print("vecteur_1 + 2 = ",vecteur_1+2)
print("vecteur_1 - 2 = ",vecteur_1-2)
print("vecteur_1 * 2 = ",vecteur_1*2)
print("vecteur_1 / 2 = ",vecteur_1/2)
print("vecteur_1 ** 2 = ",vecteur_1**2)
print("Cosinus(vecteur_1) = ",np.cos(vecteur_1))

vecteur_2 = np.array([5,4,3,2,1])
print("vecteur_2 = ",vecteur_2)
print("vecteur_1 * vecteur_2 = ",vecteur_1*vecteur_2)
""" 
 
#=============================================================

'''
import numpy as np

mat_1 = np.random.randint(-10,10, size=(3,4))
mat_2 = np.random.randint(-10,10, size=(4,2))

print("mat_1 :\n", mat_1,"\n")
print("mat_2 :\n", mat_2)
result = np.matmul(mat_1, mat_2)
print("mat_ * mat_2 :\n", result)
'''

#=============================================================


"""
import numpy as np

mat_1 = np.random.randint(-10,10, size=(5,5))
print("mat_1 :\n", mat_1) 

min_value = np.min(mat_1)
print(f"\nLa valeur minimale de toute la matrice est: {min_value}\n")
max_value = np.max(mat_1)
print(f"La valeur maximale de toute la matrice est: {max_value}\n")

min_value_by_col = np.min(mat_1, axis=0)
print(f"Les valeurs minimales par colonne sont: {min_value_by_col}\n")
min_value_by_row = np.min(mat_1, axis=1)
print(f"Les valeurs minimales par ligne sont: {min_value_by_row}\n")

mean_value_by_col = np.mean(mat_1, axis=0)
print(f"Les moyennes par colonne sont: {mean_value_by_col}\n")
std_by_col = np.std(mat_1, axis=0)
print(f"Les écarts-types par colonne sont: {std_by_col}\n")
sum_by_row = np.sum(mat_1, axis=1)
print(f"Les sommes par ligne sont: {sum_by_row}\n")

"""

#=============================================================
""" 
import numpy as np

mat_1 = np.array([[1,2,3,4],[5,6,7,8]])
mat_2 = mat_1.reshape(4,2)
mat_3 = mat_1.reshape(2,2,2)
print("mat_1:\n", mat_1)
print("mat_2:\n", mat_2)
print("mat_3:\n", mat_3)
"""

#=============================================================

''' 
import numpy as np

vec_1 = np.array([1,2,3,4,5])
vec_2 = np.array([6,7,8,9,10])
v_stack_vec = np.vstack([vec_1, vec_2])
print("Avec vstack:\n",v_stack_vec)
v_stack_big_vec = np.vstack([vec_1, vec_2,vec_1, vec_2])
print("\nEncore avec vstack:\n",v_stack_big_vec)

h_stack_vec = np.hstack([vec_1, vec_2])
print("\nAvec hstack:\n",h_stack_vec)
''' 
'''
import numpy as np

vec_1 = np.random.rand(3,3)
vec_2 = np.random.rand(3,2)

print("vec_1:\n",vec_1)
print("\nvec_2:\n", vec_2)
h_stack_vec = np.hstack([vec_1, vec_2])
print("\n[vec_1, vec_2]:\n",h_stack_vec)
'''


#=============================================================
""" 
import numpy as np

my_data = np.genfromtxt("../Data/np_data.txt", delimiter =',')
print("my_data:\n", my_data) 
my_data =  my_data.astype('int32')
print("my_data:\n", my_data) 
"""

#=============================================================

'''
import numpy as np

my_data = np.genfromtxt("../Data/np_data.txt", delimiter =',')
my_data =  my_data.astype('int32')
print("my_data :\n",my_data) 

bool_data = my_data > 100
print("\nLes indices booléens pour les valeurs > 100 :\n ",bool_data)

gt_100 = my_data[bool_data]
print("\nLes valeurs > 100 :\n",gt_100)
'''


'''
import numpy as np

my_data = np.genfromtxt("../Data/np_data.txt", delimiter =',')
my_data =  my_data.astype('int32')
print("my_data :\n",my_data) 

any_gt_100_by_row = np.any(my_data>100, axis=1)
print("Est-ce qu'au moins une valeur de la ligne est > 100:\n",any_gt_100_by_row) 
all_gt_100_by_row = np.all(my_data>100, axis=1)
print("Est-ce que toutes les valeurs de la ligne sont > 100:\n",all_gt_100_by_row) 
'''
#=============================================================




'''
import numpy as np

my_data = np.genfromtxt("../Data/np_data.txt", delimiter =',')
my_data =  my_data.astype('int32')
print("my_data :\n",my_data) 

in_50_100 = (my_data > 50) & (my_data < 100)
not_in_50_100 = ~((my_data > 50) & (my_data < 100))
print("Masque in_50_100  :\n ",in_50_100)
print("\nMasque not_in_50_100  :\n ",not_in_50_100)
'''

#=============================================================

'''
import numpy as np 
import sys 

py_list = list(range(10000))
numpy_list = np.array([py_list]  )

print(f"La taille de py_list: {sys.getsizeof(py_list)}")
print(f"La taille de numpy_list: {sys.getsizeof(numpy_list)}")
print(f"numpy_list.nbytes: {numpy_list.nbytes}")
'''

'''
import time
max_value = 300_000_000
list_1 =list(range(1,max_value+1))
start_time = time.time()
sum_list_1 = sum(list_1)
end_time = time.time()
print(f"Temps d'exécution : {end_time - start_time}")
print(f"La somme = : {sum_list_1:,}")
''' 



import numpy as np
import time
max_value = 300_000_000
list_1 = np.array(np.arange(1,max_value+1), dtype='int64')
start_time = time.time()
sum_list_1 = np.sum(list_1)
end_time = time.time()
print(f"temps d'exécution : {end_time - start_time}")
print(f"la somme = : {sum_list_1:,}")


  

#=============================================================













