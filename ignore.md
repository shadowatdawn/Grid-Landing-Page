
.midpart{
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    background-color: hsl(228, 100%, 60%);
}
.introduction{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    text-align: center;
    align-items: center;
    color: hsl(0, 0%, 100%);
    border: 1px solid hsl(220, 100%, 64%);
    font-weight: 300;
    width: 40%;
    height: 100%;
    animation-name: SlideIn;
    animation-duration: 2s;
}
.introduction:hover{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: hsl(0, 0%, 100%);
    background-color: hsl(220, 100%, 64%);
    border: 1px solid hsl(220, 100%, 64%);
    width: 40%;
    height: 100%;
}
.statistics{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 60%;
    height: 100%;
    animation-name: SlideIn;
    animation-duration: 2s;
}
.item{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
    height: 100%;
    width: 100%;
    border: 1px solid hsl(220, 100%, 64%);
}
.item:hover{
    display: flex;
    flex-direction: column;
    background-color: hsl(220, 100%, 64%);
}
.statistics1{
    display: flex;
    box-sizing: border-box;
    color: hsl(0, 0%, 100%);
    width: 100%;
    height: 100%;
}
.statistics2{
    display: flex;
    box-sizing: border-box;
    color: hsl(0, 0%, 100%);
    border: 1px solid hsl(220, 100%, 64%);
    width: 100%;
    height: 100%;
}
.stat_descriptions{
    display: flex;
    flex-direction: row-reverse;
    margin: 0;
    justify-content: space-between;
}
.stat_numbers{
    margin-top: 0px;
    font-size: 30px;
}
.stat_icons{
    margin-top: 10px;
}
.stat_p{
    position: relative;
    top: 50%;
    font-size: 14px;
}
.stat_p p{
    font-weight: 300;
    margin-top: 0;
}
.stat_p h4{
    margin-bottom: 0;
}