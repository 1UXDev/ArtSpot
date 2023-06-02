import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0px auto;
    font-family: system-ui;
    max-width:600px;
    min-width:360px;
    margin-bottom:96px;
    padding-top:24px;
  }

  nav{
    display:flex;
    flex-flow:row wrap;
    position:fixed;
    bottom:0px;
    justify-content:space-around;
    width:100%;
    max-width:600px;
    background-color:rgba(255,255,255,0.7);
    backdrop-filter: blur(8px);
    font-family: "Roboto Condensed", sans-serif;
    text-transform:uppercase;
    border-top:0.5px solid white;
    z-index:99;
  }
  nav * {
    width:33%;
    text-align:center;
    padding:12px;
    font-weight:800;
  }

  nav *:hover{
    background-color: rgba(0,0,0,0.2);
  }
  nav a{
    color:rgb(50,50,50);
    font-weigth:600;
    text-decoration:none;
    font-size:1em;
  }
  nav a:hover{
    color:rgb(0,0,0);
  }

  main ul{
    display:flex;
    flex-flow:row wrap;
    gap:24px;
    background:grey;
    list-style:none;
    padding-inline-start:unset;
  }

  main ul h4{
    font-size:1em;
  }

  .details{

  }

  .details button{
    position:relative;
    left:24px;
    padding:8px 24px;
    border-radius:99px;
    font-weight:bold;
    z-index:98;
    background:rgba(255,255,255, 0.7);
    backdrop-filter: blur(8px);
    box-shadow: 3px 3px 8px rgba(0,0,0, 0.12);
    border:none;
    cursor:pointer;
  }

  .details button:hover{
    box-shadow: 4px 4px 12px rgba(0,0,0, 0.18);
  }

  .details .colorPalette{
    display:flex;
    flex-flow:row wrap;
    gap:2%;
    margin: 24px 0px 12px 0px;
    width:100%;
    justify-content:space-between;
  }
  .colorPalette .colorContainer{
    width:17%;
  }
  
  .details img{
    width:100%;
    margin-top:-108px;
  }

.artpieceDetails{
  position:relative;
  top:-48px;
  background:rgba(255,255,255, 0.7);
  backdrop-filter: blur(8px);
  margin:0px 24px;
  padding:2px 24px;
  box-shadow: 3px 3px 8px rgba(0,0,0, 0.12);
  border-radius:8px;
 }

 .details .artistYear{
  display:flex;
  flex-flow:row wrap;
  gap:24px;
 }

 .details .genre{
  text-decoration:underline;
  color:grey;
  cursor:pointer;
 }

.details ul{
  padding-inline-start:unset;
  padding: 0px 48px;
  list-style-type:none;
}

.details li{
  display:flex;
  flex-flow: row wrap;
  padding:12px;
  border-radius:8px;
  margin-bottom:8px;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.12);
}

.details li .textContent{
  width:100%;
  padding-bottom:12px;
}

.details li .textContent h4{
  margin-block-start:6px;
  margin-block-end:unset;
  color:gray;
}

.details li .textContent p{
  font-size:0.9em;
}

.details li .dateTime{
  display:flex;
  flex-flow: row wrap;
  column-gap:24px;
  row-gap:6px;
  width:50%;
  font-size:0.8em;
  color:gray;
  align-items:center;
}

.details li button{
  cursor:pointer;
  font-size:0.8em;
  justify-self:flex-end;
}

.details li button:hover{
  box-shadow: 4px 4px 12px rgba(0,0,0,0.18)
}

.details .dateTime *{
  margin-block-start:unset;
  margin-block-end:unset;
}

.details .commentContainer{
  padding-bottom:24px;
}

.details .commentContainer .nothingHere {
  font-size:0.9em;
  color:gray;
}

.details form{
  padding:0px 48px;
  display:flex;
  flex-flow: column wrap;
  gap:24px;
}

.details form .formContent{
  display:flex;
  flex-flow: column wrap;
  gap:12px;
}

.details form .formContent * {
  display:flex;
  flex-flow:column wrap;
}

.details form label{
  font-size:0.9em;
  color:grey;
}

.details form button{
  width:150px;
  position:static;
}

.artPieceDetailsContainer{
  display:flex;
  flex-flow:column wrap;

}

.details .favButton{
  top:-36px;
  width:48px;
  height:48px;
  padding:unset;
  font-size:1.8em;
  z-index:3;
  padding-top:3px;
  align-self:end;
  margin-right:48px;
}


/* styles for the spotlight page*/
main{
  padding:0px 24px;
}

main a{
  color:black;
  text-decoration:none;
}

main .Spotlight{
padding-top:72px;
}

/* styles for the art-list / overview page*/

.artList{
  padding: 0px 24px;
}

.artList ul{
  display:flex;
  flex-flow:row wrap;
  gap:24px;
  list-style:none;
  padding-inline-start:unset;

}

.artList li {
  background-color: white;
  width:100%;
  border-radius:8px;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.12);
}


.artList li a {  
  text-decoration:none;
  color:black;
  display:flex;
  flex-flow:row wrap;}

  .artList li h4{
    width:100%;
    margin-block-end: unset;
  }

  .artList h4, .artList p {
    padding-left:12px;
  }

  .artList p{
    width:300px;
  }

  .artList img{
    width:100%;
    height:300px;
    object-fit:cover;
  }

.artList .favButton{
  position:relative;
  top:-96px;
  left:-290px;
  width:48px;
  height:48px;
  padding:unset;
  font-size:1.8em;
  z-index:3;
  padding-top:3px;
  border-radius:99px;
    font-weight:bold;
    z-index:98;
    background:rgba(255,255,255, 0.7);
    backdrop-filter: blur(8px);
    box-shadow: 3px 3px 8px rgba(0,0,0, 0.12);
    border:none;
    cursor:pointer;
}
@media (max-width:400px){
  .artList .favButton{
    left:12px;
    top: -170px;
  }
}
`;
