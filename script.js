TinyTurtle.apply(window, [undefined, 400, 400]);

function square(){
forward(100);
right(90);
forward(100);
right(90);
forward(100);
right(90);
forward(100);
right(90);
forward(100);
}

function triangle(size){
    forward(size);
    right(120);
    forward(size);
    right(120);
    forward(size);
    right(120);
}

function rectangle(size){
left(90);
forward(100);
left(90);
forward(200);
left(90);
forward(100);
left(90);
forward(200);
}
// Type your function call below
square();
rectangle();
triangle(80);
stamp();