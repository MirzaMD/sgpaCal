export function SgpaCal(m:number,ch:number,ca:number
    ,p:number,e:number,en:number,sf:number,k:number):number{
   let mathsCredit:number=FourCredits(m);
   let chemCredits:number=FourCredits(ch);
   let caedCreidts:number=ThreeCredits(ca);
   let plcCredits:number=ThreeCredits(p);
   let escCredits:number=ThreeCredits(e);
   let engCredits:number=OneCredits(en);
   let sfhCredits:number=OneCredits(sf)
   let kanCredits:number=OneCredits(k)
   let sgpa:number=((mathsCredit+chemCredits+caedCreidts
    +plcCredits+escCredits+engCredits+sfhCredits+kanCredits)/200)*10
    return parseFloat(sgpa.toFixed(2)) 
}
function FourCredits(m:number):number{
    if(m>90)
       return (10*4);
      else if(m>80 && m<90)
      return (9*4)
      else if(m>70 && m<80)
      return (8*4)
      else if(m>60 && m<70)
      return (7*4)
     else if(m>50 && m<60)
      return (6*4)
     else if(m>40 && m<50)
      return (5*4)
     else if(m>30 && m<40)
      return 4*4
     else if(m>20 && m<30)
      return 3*4
     else if(m>10 && m<20)
      return 2*4
     else 
     return 4
}
function ThreeCredits(m:number):number{
    if(m>90)
       return (10*3);
      else if(m>80 && m<90)
      return (9*3)
      else if(m>70 && m<80)
      return (8*3)
      else if(m>60 && m<70)
      return (7*3)
     else if(m>50 && m<60)
      return (6*3)
     else if(m>40 && m<50)
      return (5*3)
     else if(m>30 && m<40)
      return 4*3
     else if(m>20 && m<30)
      return 3*3
     else if(m>10 && m<20)
      return 2*3
     else 
     return 3
}
function OneCredits(m:number):number{
    if(m>90)
       return (10*1);
      else if(m>80 && m<90)
      return (9*1)
      else if(m>70 && m<80)
      return (8*1)
      else if(m>60 && m<70)
      return (7*1)
     else if(m>50 && m<60)
      return (6*1)
     else if(m>40 && m<50)
      return (5*1)
     else if(m>30 && m<40)
      return 4*1
     else if(m>20 && m<30)
      return 3*1
     else if(m>10 && m<20)
      return 2*1
     else 
     return 1
}