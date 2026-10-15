def change_param(int_param, str_param, list_param):
    int_param=10
    str_param = "Un trou de ver n'est pas forcément transparent"
    list_param.append(10)
    print(f"Dans change_param :\n\tint_param={int_param}\n\tstr_param={str_param}\n\tlist_param={list_param}\n")
    
my_int=1
my_str="Un trou noir c'est troublant"
my_list=[1,2,3]
 
print(f"Dans le programme principal:\n\tmy_int={my_int}\n\tmy_str={my_str}\n\tmy_list={my_list}\n")
change_param(my_int, my_str, my_list)
print(f"Dans le programme principal:\n\tmy_int={my_int},\n\tmy_str={my_str}\n\tmy_list={my_list}\n")
 
 




    
