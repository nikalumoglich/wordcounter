import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Container, Section, Form, Columns, Content} from 'react-bulma-components';
import i18n from './i18n';
import {Translation} from 'react-i18next';


class WordCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            response: null
        };
    }

    setInput = (e) => {
        this.setState({input: e.target.value});
    }

    count = () => {
        const url = new URL('service/count-words?input=' + this.state.input, window.location.href);
        fetch(url)
            .then(res => {
                res.json().then(data => {
                    this.setState({response: {result: data}});
                });
            })
            .catch(() => {
                this.setState({response: {error: {message: 'Request Error!'}}});
            });
    }

    render() {
        return (
            <Section>
                <Container>
                    <InputText input={this.state.input} setInput={this.setInput} t={this.props.t}/>
                    <CountButton count={this.count} t={this.props.t}/>
                    <ResultFrame response={this.state.response}/>
                </Container>
            </Section>
        );
    }
}

const InputText = ({...props}) => {
    return (
        <Container>
            <Form.Label>{props.t('app_props.input')}</Form.Label>
            <Form.Field kind='addons'>
                <Form.Control fullwidth>
                    <Form.Input type='text' onChange={props.setInput} value={props.input || ''}/>
                </Form.Control>
            </Form.Field>
        </Container>
    );
}

const CountButton = ({...props}) => {
    return (
        <Columns.Column size="two-fifths">
            <Button onClick={props.count} fullwidth color='primary' size='large'>{props.t('app_props.count')}</Button>
        </Columns.Column>
    );
}

const ResultFrame = ({...props}) => {
    if (props.response && props.response.result.error) {
        return (
            <Content className='has-text-centered'>
                <p style={{color: "#ff8080"}} dangerouslySetInnerHTML={{__html: props.response.result.error}}>
                </p>
            </Content>
        );

    } else if (props.response && props.response.result) {
        return (
            <Content className='has-text-centered'>
                <p dangerouslySetInnerHTML={{__html: props.response.result.readableMessage}}>
                </p>
            </Content>
        );
    }
    return (<div></div>);
}

const Footer = ({...props}) => {
    return (
        <Content className='has-text-centered'>
            <p dangerouslySetInnerHTML={{__html: props.t('footer')}}>
            </p>
        </Content>
    );
}

ReactDOM.render((
        <Translation i18n={i18n}>
            {
                (t, {i18n}) => <WordCounter t={t}/>
            }
        </Translation>
    ),
    document.getElementById('react')
);

ReactDOM.render((
        <Translation i18n={i18n}>
            {
                (t, {i18n}) => <Footer t={t}/>
            }
        </Translation>
    ),
    document.getElementById('footer')
);