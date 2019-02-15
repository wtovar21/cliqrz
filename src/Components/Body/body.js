
import React from   'react';
import Header from '../Header/Header';

import './body.css';
import Card from '../Card/card';
const characters = [
    {
        id: 0,
        name: "batman",
        picture: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Batman-BenAffleck.jpg/200px-Batman-BenAffleck.jpg"
    },
    {
        id: 1,
        name: "Robin",
        picture: "https://pmctvline2.files.wordpress.com/2018/10/source-tit102u0081v1.jpg?w=200"
    },
    {
        id: 2,
        name: "Penguin",
        picture: "https://vignette.wikia.nocookie.net/batmantheanimatedseries/images/b/b5/The_Penguin.jpg/revision/latest/scale-to-width-down/200?cb=20130303081132"
    },
    {
        id: 3,
        name: "Joker",
        picture: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/HeathJoker.png/200px-HeathJoker.png"
    },
    {
        id: 4,
        name: "Two Face",
        picture: "https://vignette.wikia.nocookie.net/batman/images/5/56/Two-Face_%28Telltale%29_2.jpg/revision/latest?cb=20170805101804"
    },
    {
        id: 5,
        name: "Harley Quinn",
        picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzlHqOcXAthCxtxx845Pq0hyhT0MxZJY46Euct8up0iXnlrlX'
    }
]

class Body extends React.Component{
    state = {
        characters : characters,
        clicked: [],
        score: 0,
        show: false,
        message: "",
        topScore: 0

    }
    handleShow = () => {
        if(this.state.show){
            this.setState({
                show: false
            })
        }else {
            this.setState({
                show: true
            })
        }
    }
    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    handleClick = (id) => {
        console.log("In handle click")
        if(this.state.clicked.includes(id)){
            // alert("You Lose")
            this.setState({
                score: 0, 
                clicked: [],
                message:"This image was cliqued already!",
                topScore:this.state.topScore

                
            })
        }else {
            const newArr = this.shuffle(this.state.characters);
            this.setState({
                clicked: [...this.state.clicked, id],
                score: this.state.score + 1,
                characters: newArr,
                topScore:this.state.score,
                message:""
                
                
            }, function(){
                if(this.state.score === newArr.length){
                    this.setState({
                        clicked:[],
                        topScore: this.state.score,
                        message: "Good job! you got all pictures correct!",
                        score: 0



                    })
                }
                console.log(this.state.clicked);
            // }, function() {
            //     if(this.state.topScore=== characters.length){
            //         topScore = 0;
            //         message = "Good job! you got all pictures correct!";
                    
            //     }

                
            

            }) 

        }
     
       
    }
    render(){
        return (
        <div >
            <Header 
            text={'Cliquey Game'}
            message={this.state.message}
            topScore= {<div> {this.state.topScore} </div>}
            
            score={this.state.score}  />
            <div className='wrapper'>

        <div className = 'body'> 
           
           
            {
                this.state.characters.map((element, index) => {
                    return <Card id={element.id} handleClick = {this.handleClick} picture={element.picture}  name={element.name }/>
                })
            }
           
        </div>
        </div>
        </div>
    
        )
    }
   
}

export default Body;