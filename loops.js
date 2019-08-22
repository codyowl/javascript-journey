/*
	While loop
	do while loop
	for loop
	break and continue
*/

// while
let i = 0
while (i < 3){
	alert(i);
	i++
}

// do while
let i = 0;
do {
	alert(i);
	i++
}while (i<3)

// for loop
for (let i=0; i<=10; i++){
	alert(i);
}
// without begin
let i = 0;
for (; i<=10; i++){
	alert(i);
} // since we define i we can simpley use ;

// break and continue
for (let i=0; i<=10; i++){
	if (i%2==0) continue; // the loop will be terminated and continue afterwards
	alert(i);
}

for (let i=0; i<=10; i++){
	if (i==2) break; // the loop will be terminated and wont be continued.
}