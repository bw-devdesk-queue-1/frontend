import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

function IssueCard(props) {
    return (<Card>
        <h2>{props.title}</h2>
        <div>{props.content}</div>
    </Card>);
}

export default function Queue(){
    const [issues, setIssues] = useState([
        {title: "Hello, world!", content: "I can say hello."},
        {title: "Live share doesn't work", content: "I installed the thing but then it says not enough stuff is installed. :/"},
    ]);
    return(
        <Container>
            {issues.map(issue => <IssueCard {...issue} />)}
        </Container>
    );
}