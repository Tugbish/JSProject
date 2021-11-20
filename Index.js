function addElements(dd,array)
{  
    for(i=0;i<array.length;i++)
    {
	var opt=document.createElement('option');
     opt.text=array[i];
     opt.value=array[i];
	 dd.add(opt);
	}
}