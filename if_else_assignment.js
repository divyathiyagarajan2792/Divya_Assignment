var mark=50;
if(mark<0 || mark>100){
    console.log("Invalid Mark");
}
else if(mark>=90 && mark<=100 )
{
    console.log("Grade A");
}
else if(mark>=80 && mark<=89 )
{
    console.log("Grade B");
}
else if(mark>=70 && mark<=79 )
{
    console.log("Grade C");
}
else if(mark>=60 && mark<=69 )
{
    console.log("Grade D");
}
else if(mark>=50 && mark<=59 )
{
    console.log("Grade E");
}
else
{
    console.log("Fail");
}