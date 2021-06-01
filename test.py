import random
def c(fr):
    n= random.randint(1,3)
    l=[]
    for i in range(n):
        k=[]
        for i in range(6):
            k.append(random.randint(-4,4))
        l.append(k)
    print("} else if (this.state.value==",end="")
    print(fr,end="")
    print("""){
      this.setState({strings : """,end="")
    print(l,end="")
    print("})")

fr=1
for i in range(500):
    fr+=1
    c(fr)
print("}")