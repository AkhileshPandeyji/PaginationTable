import "./style.css";
import { Component } from 'react';
import ListTable from './components/ListTable';
import ListTableController from './components/ListTableController';
import ErrorBoundary from "./components/ErrorBoundary";

const students = [
  {roll:1,name:"Akhilesh Kumar Pandey",email:"pandeyakhilesh5372@gmail.com"},
  {roll:2,name:"Magnus Carlsen",email:"magnusCarlsen@abc.com"},
  {roll:3,name:"Vishwanathan Anand",email:"anandvishy@gmail.com"},
  {roll:4,name:"Peter Leko",email:"peterleko@gmail.com"},
  {roll:5,name:"Peter Svidler",email:"petersvidler@gmail.com"},
  {roll:6,name:"Hikaru Nakamura",email:"hikunaka@gmail.com"},
  {roll:7,name:"Ian Nepominiatchhi",email:"nepotactics@gmail.com"},
  {roll:8,name:"Judit Polgar",email:"juditpolgar@gmail.com"},
  {roll:9,name:"MVL",email:"mvl@gmail.com"},
  {roll:10,name:"Alexander Grischuk",email:"grialex@gmail.com"},
  {roll:11,name:"Sagar Shah",email:"sgarShah2@gmail.com"},
  {roll:12,name:"Anish Giri",email:"girianish@gmail.com"},
  {roll:13,name:"Teimour Radjabov",email:"radjabeingraja@gmail.com"},
  {roll:14,name:"Soumya",email:"soumyaji@gmail.com"},
  {roll:15,name:"Vidit Gujrathi",email:"GujVidi@gmail.com"},
  {roll:16,name:"Gary Kasparov",email:"thegarykasparov@gmail.com"},
  {roll:17,name:"Goku",email:"goku@gmail.com"},
  {roll:18,name:"Naruto Uzumaki",email:"narutotheuzumaki@gmail.com"},
  {roll:19,name:"Sasuke Uchiha",email:"lastUchiha@gmail.com"},
  {roll:20,name:"Kakashi Hatake",email:"hatakekakashi@gmail.com"},
  {roll:21,name:"Guy Sensei",email:"senseiguy2@gmail.com"},
  {roll:22,name:"Gara",email:"gara@gmail.com"},
  {roll:23,name:"Kurama",email:"theninetail@gmail.com"},
  {roll:24,name:"Sakura Chan",email:"chanaro@gmail.com"},
  {roll:25,name:"obito Uchiha",email:"lonelywithoutrin@gmail.com"},
  {roll:26,name:"ITachi Uchiha",email:"higherthanhokage@gmail.com"},
  {roll:27,name:"Rin Nohara",email:"nohararin@gmail.com"},
  {roll:28,name:"Madara Uchiha",email:"uchihamadara@gmail.com"},
  {roll:29,name:"Ishki Osutsuki",email:"biggestvillain@gmail.com"},
  {roll:30,name:"Kaguya Osutsuki",email:"motherofsixpaths@gmail.com"},
  {roll:31,name:"Asuma Sarutobi",email:"asumasarutobi@gmail.com"},
  {roll:32,name:"Third Hokage",email:"SeniorSarutobi@gmail.com"},
  {roll:33,name:"Konohamaru Sarutobi",email:"thetrashofalltime@gmail.com"},
  {roll:34,name:"Hinata Uzumaki",email:"hinatathewife@gmail.com"},
  {roll:35,name:"Sai",email:"saipainter@gmail.com"},
  {roll:36,name:"Shikamaru",email:"shikamaruthementalist@gmail.com"},
  {roll:37,name:"Choji",email:"chozithebigboy@gmail.com"},
  {roll:38,name:"Iruka Sensei",email:"thestartofwilloffire@gmail.com"},
  {roll:39,name:"Boruto Uzumaki",email:"theJuniorUzumaki@gmail.com"},
  {roll:40,name:"Sarada Uchiha",email:"theJuniorUchiha@gmail.com"}
  ];
const headings = ["Roll no.","Name","Email"];
const limits = [10,20];
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:students,
            headings:headings,
            limit:10,
            currPage:1,
            totalPages:1
        };
    }

    componentWillMount(){
        this.setState({
            ...this.state,
            totalPages:Math.ceil(this.state.data.length/this.state.limit)
        });
    }

    nextPage = ()=>{
        if(this.state.currPage < this.state.totalPages){
            this.setState({
                ...this.state,
                currPage:this.state.currPage+1
            });
        }                
    }
    prevPage = ()=>{
        if(this.state.currPage > 1){
            this.setState({
                ...this.state,
                currPage:this.state.currPage-1
            });
        }                
    }
    lastPage = ()=>{
        this.setState({
            ...this.state,
            currPage:this.state.totalPages
        });
    }
    firstPage = ()=>{
        this.setState({
            ...this.state,
            currPage:1
        });
    }
    changeLimit = (value,e)=>{
        this.setState({
            ...this.state,
            limit:value,
            totalPages:Math.ceil(this.state.data.length/value),
            currPage:1
        }) ;           
    }

    render(){
        return(
            <div>
                <ErrorBoundary>
                <ListTable data={this.state.data} limit={this.state.limit} currPage={this.state.currPage} totalPages={this.state.totalPages} headings={this.state.headings} />
                </ErrorBoundary>
                <ListTableController limits={limits} limit={this.limit} currPage={this.state.currPage} nextPage={this.nextPage} prevPage={this.prevPage} lastPage={this.lastPage} firstPage={this.firstPage} changeLimit={this.changeLimit} />
            </div>
        )
    }
}

export default App;