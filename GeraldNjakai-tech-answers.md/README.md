## Answers to Technical Questions


##  I spent Three days on average on the project.I would add a reminder feature and scheduling feature to the solution if I had time.

##  The most challenging aspects of the test were the tasks on dragging and reordering that I did not get to perfect as well as the toggling task of night mode and dark mode.I spent a lot of time on both as well as testing.


## The most useful feature of Vue.js as used in this code would be code switch repetition and computed properties which allow code to be more declarative and elaborative.Here is an example of code snippet from  _base.scss and _container.scss note the similarities in their code bases from a similar stem. 
##  //_base.scss//
## 
/*    *{
    padding: 0;
    margin: 0;
}

html{
    font-size: 112.5%;
}

body{
    box-sizing: border-box;
    height: 100vh;
    font-family: $font-display;
    background-color: $light-gray;
}

#app, .wrapper{
    height: 100%;
}

picture img{
    width: 100%;
    height: 16rem;
    object-fit: fill;
    position: absolute;
    top: 0 ;
    left: 0;

    @media( max-width: $phone){
        object-fit: cover;
        max-height: 13rem;
    }
}

.attribution{
    position: fixed;
    bottom: 5px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
   
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 

    span:last-of-type{
        margin-left: 10px;
    }

    a{
        text-decoration: none;
        color: #000; 

        &:hover{
            border-bottom: 1px solid hsl(236, 9%, 61%);
            color: hsl(236, 9%, 61%); 
        }
    }
}
*/
## //_Container.scss//
/*
#container{
    width: 85%;
    max-width: 30rem;
    margin: auto;
    height: 85vh;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;

    @media(max-width: $phone){
        padding-top: 3.5rem;
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2{
            flex : 1;
            letter-spacing: 10px;
            color: #fff;
            z-index: 5;
        }

        input{
            display: none; 
        }

        label{
            cursor: pointer;
            transform: translateY(2px);
        }
    }

    main{
        max-height: 70vh;
        display: flex;
        flex-direction: column;
        padding-top: 1.8rem;
        position: relative;

        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        @media (max-width: $phone) {
            max-height: 65vh;
            margin-bottom: 1rem;
        }

        nav{
            position: sticky;
            background-color: #fff;
            font-size: .7rem;
            padding: 1rem;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
    
            display: flex;
            align-items: center;
          
            .clear-complete{
                background-color: #fff;
                border: none;
                outline: none;
                cursor: pointer;
                font-family: inherit;
                color: $light-grayish-3;
                font-size: .7rem;
                &:hover{
                     color: $light-grayish-4;
                 }
            }
    
            .item-left{
                color: $light-grayish-3;
                cursor: default;
     
                @media(max-width: $phone){
                    flex: 1
                }
            }
        }
    }
     
    .shadow-layout{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 10px;
        box-shadow: 10px 30px 30px -10px $light-grayish-1, -10px 30px 30px -10px $light-grayish-1;
        z-index: -100;
    }
}


*/

## For effective performance testing I would recommend third party and open source tools such as sentry among other tools that do thorough monitoring of bugs and unended code.However,the ultimate way in my humble opinion from past experience of dealing with this would be by manually testing from the client end and feedback working backwards to every single line of code written to API calling and endpoint determination.

##  The test was wholesome tough but manageable.I have no opinion on how to better the test as it was okay.