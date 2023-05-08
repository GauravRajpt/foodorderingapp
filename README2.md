# Namaste React Day 5 talk is cheap show me code

today we are going to creat our app-

<b>first i have some questions?</b>

is jsx mandatory in react?<br>
is typeScript mandatory in react?<br>
is ES6 mandatory in React?

No, NO, NO! they all are not mandatory. React doesn't force us to use them, we can create our app without them, Even React is not mandatory.

<b>How can we write comment inside JSX?</b>
inside {} we can write any js code , so we can write comments as well- //like this.

<b>if in our website we just want to use react in just our footer can we use it ? if yes then how?</b>
<br>Yes we can use react in just footer ? to do this we need to give in footer id="root"(you can use any id name) in footer, and get in our js file.

<h3>Never start code without planing, so let's plane our app layout</h3>
we are creating a app like swigy or zomato.
our app name will be Food Villa.
Layout-

```
/*
Header
- Logo(titleg)
- Navbar(right side)
- Cart

Body
- SearchBar
- RestaurantCard

footer
- links
- copyright
*/
```

<b>for Now just creat four component in our js file:

- Header component
- Body component
- Footer componet
- AppLayout component(we will call all other component inside it and then render it.</b>

```
    const Title=()=>(
        <a href='/'>
    <img className="logo" src='https://img.wongnai.com/p/1920x0/2020/04/12/9b8d85e2be69482f936cff161675197f.jpg' alt='logo'/>
    </a>
    );
const Header=()=>{
    return(
        <div className="header">
            <Title/>
            <div className="navItems">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACTS</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    );

};
const Body=()=>{
   return <h2>body</h2>
};
const Footer=()=>{
    return <h2>Footer</h2>
};
const AppLayout=()=>{
   return( <div>
    <Header/>
    <Body/>
    <Footer/>
    </div>
   )
};
```

<kbd> most common mistake i do when i write jsx component is , i forget to return() jsx , and this causes error</kbd>

<br>so inside header we will have a logo and navabar with cart
.You can do css youself !

<b>`What is react.fragment` </b><br>
<b>React.fragment is component that is exported by React , becoz jsx expression must have one parent element , we can use div or anything as parent , but they take some space & they could be seen inside our html code as extra tag, if you don't want these extra tag you can use <React.fragment> , but it very long!
<br>don't worry, you can also write this: <></> they both are one & same thing.</b>

<b>How can we give inline style in react</b>?
<br>we can give inline style in react using jsx,

```
const headingRed={
    color: red;
}
<h1 style={headingRed}>Hello</h1>
```

so we need to creat javascript object , then we can the object name, or we can directly paas the object like this:

```
<h1 style={{
    color: "red";
}}>Hello</h1>
```

they are one and the same thing.

<b>Now let's make our body section, </b><br>
IN body section we'll create search bar later, for now just focus on restaruntCard.
<br>
first plane how our card shoud look like-

RestaurantCard

- Image
- Name of Restaurant
- Cusins
- distance from us

NOw let's create this

```
const RestraunCard=()=>{
   return( <div className="restaurant">
        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dpyuymdvwsqojyf7l22n' alt="restraunt"></img>
        <h2>Satvik Bhoj</h2>
        <h4>NorthIndian</h4>
        <h4>12 minutes away</h4>
    </div>
   )
};
const Body=()=>{
   return (
    <div className='restrauntCards'>
    <RestraunCard/>
    <RestraunCard/>
    <RestraunCard/>
    <RestraunCard/>
    </div>
   )
};
```

this is our restaurant card , but this is static , means all our card will be same always, so we need to make it dynamic,

so now our data will come from an object sppose this is a restuarant object.

```
const Burgerking={
        image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dpyuymdvwsqojyf7l22n',
        Name: "Burger KIng",
        Cusins: ["Mexican", "American"],
        distance:"2 km",
};

```

so now how can we get data from this object and show use this in our code.
<br>it's very simple jsx allows us to use javascrpt inside html, so will get and use data like this-

```
const RestraunCard=()=>{
   return( <div className="restaurant">
        <img src={Burgerking.image} alt="restraunt"></img>
        <h2>{Burgerking.Name}</h2>
        <h4>{Burgerking.Cusins}</h4>
        <h4>{Burgerking.distance}</h4>
    </div>
   )
};
```

this is perfect , but our cusins data is in an array, and they shoud be seprated by , when they appear in screen, so for this in javaScript we use join()

```
<h4>{Burgerking.Cusins.join(", ")}</h4>
```

but but but in real world mostly we didn't use this type of data , the data would be more complex , and it would be comiing from some api,

so to learn this, we will use swigy's Api,

incept element=> netfork => fetch- here you can see all the api swigy is using on the realtime.

but for now we are not calling swigy's api , so just copying some object that has restaurant datails, and use this object in our code.

```
const RestraunCard = () => {
  return (
    <div className="restaurant">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          restaurant[0].data?.cloudinaryImageId
        }
      ></img>
      <h2>{restaurant[0].data?.name}</h2>
      <h4>{restaurant[0].data.cuisines.join(", ")}</h4>
      <h4>{restaurant[0].data?.slaString}</h4>
    </div>
  );
};
```

i am not showing you that object that i copied beacause it has hundreds of line.

but now we only have index[0] data in all our cards, and we want all cards with different data.

so we can do something like this.

```
 <RestraunCard  restaurant={restaurant[0]}/>
      <RestraunCard restaurant={restaurant[1]}/>
      <RestraunCard restaurant={restaurant[2]}/>
```

here we are passing data to props,

<b>what is props</b>?
with the help of props we can get the data , that parent component is sending to child component.
it like js argument and parameter.

```
const RestraunCard = (props) => {
  return (
    <div className="restaurant">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          props.restaurant.data?.cloudinaryImageId
        }
      ></img>
      <h2>{props.restaurant.data?.name}</h2>
      <h4>{props.restaurant.data.cuisines.join(", ")}</h4>
      <h4>{props.restaurant.data?.slaString}</h4>
    </div>
  );
};
```

some cool developer also do this, instead of writing props as parameter.

```
const RestraunCard = ({ restaurant }) => {
  return (
    //now they don't need to write props
       <h2>{restaurant.data?.name}</h2>
       )}

```

this is called desructuring.

even we can destructure our restaurant, again

```
const RestraunCard = ({ restaurant }) => {
  const { name, cloudinaryImageId, cuisines, slaString } = restaurant.data;
  return (

```

we can also do this instead:

```

const RestraunCard = ({ name, cloudinaryImageId, cuisines, slaString }) => {
  return (
    <div className="restaurant">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      ></img>
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="restrauntCards">
      <RestraunCard {...restaurant[0].data} />
      <RestraunCard {...restaurant[1].data} />
      <RestraunCard {...restaurant[2].data} />
      <RestraunCard {...restaurant[3].data} />
    </div>
  );
};
```

but now we have to write index number everytime, suppose if we have 100s of resturant data , then we can't write like this, in this situation we will map().

```
const Body = () => {
  return (
    <div className="restrauntCards">
      {restaurant.map((el) => {
        return <RestraunCard {...el.data} />;
      })}
    </div>
  );
};
```

<b>what is optional chaining?</b>
<br><b>Syntax</b><br>
obj.val?.prop<br>
obj.val?.[expr]<br>
obj.func?.(args)<br>

<b>Description</b><br>
The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.

<b>what is destructuring</b>?
<br>Destructuring is es6 expression, with the help of destructing we can unpack an array or an object and get their values inside variables,
and it will not modify the array or object.

distructuring in array-
`why we need distructng?`
<br>later if we want to store some value from an array to variable we do like this.

```
const arr=[10,20,30];
const a=arr[0];
const b=arr[1];
const c=arr[3];
console.log(a,b,c)      //10,20,30
```

but this is very messy and every time we have to write arr[index], thats why we need distructing in array:

```
const arr=[10,20,30];
const [a,b,c]=arr;
console.log(a,b,c)     //10,20,30
```

we now also switch values very easily.

```
[b, a, c] = [a, b, c];
  console.log(a, b, c); //20, 10, 30
```

<b>Object distructuring</b>-
we can get object properties with object distructuring, inside curly braces we need to give properties name to get them.

```
const obj={
  name:"gaurav",
  age:"23"
}
const {name, age}= obj;
/*
now we can directly use variable name instead of obj.name, obj,age.*/

console.log(name, age)
```

we can't do this: {name, age}= obj; we need to wrap this expresion inside block:( {name, age}= obj;) <br>
we can also change of these values-

```
const {name: myName, age: myAge}= obj;
console.log(myName, myAge);
```

Destructuring is used to create varibles from array items or object properties.

<b>what is spread operator</b>?<br>
Spread syntax is used to unpack iterables such as arrays, objects, and function calls.
eg- in old way if want copy array items then we do like this:

```
const arr = [2, 3, 4];
  const arr2 = [1, arr[0], arr[1], arr[2]];
  console.log(arr2);
```

now after es6 we can use spread operator (...)

```
const arr = [2, 3, 4];
const arr2 = [1, ...arr];
console.log(arr2);
```

<b>What is map()</b>?<br>
map() creates a new array from calling a function for every array element and returns an new array.<br>
Syntax-<br>
array.map(function(currentValue, index, arr), thisValue)

<b>what is virtural dom</b>?<br>
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

<b>what is reconcilation</b>>?<br>
The mechanism to diff one tree with another to determine which parts need to be changed and then update the original DOM with it is called Reconciliation .

<b>what is key in react</b>?<br>
A key is a unique identifier. In React, it is used to identify which items have changed, updated, or deleted from the Lists

<b>what is react fiber</b>?<br>
react fiber is a new reconcilation tool

<b>why don't we use index as a key</b>?<br>
We don't recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.
