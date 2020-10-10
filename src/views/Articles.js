import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const articles = [
    {
        id:1,
        tittle: 'React is great!!',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem dignissimos a et vel veritatis, unde doloremque pariatur, fugiat officia soluta molestiae dolorum harum rerum impedit dolorem adipisci. Id, velit?At assumenda recusandae dolor sunt corporis libero ullam perspiciatis rem suscipit quod quidem, nulla, dolorum earum? Odit vero, eius accusamus numquam eaque ex eos dolore voluptatem tempora a. Ad, quo?',
        articleUrl: 'https://www.youtube.com/watch?v=sRA6caH7Wfg',
        created: '1 day',
    },
    {
        id:2,
        tittle: 'My mind is gone..',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem dignissimos a et vel veritatis, dolor sunt corporis libero ullam perspiciatis rem suscipit quod quidem, nulla, dolorum earum? Odit vero, eius accusamus numquam eaque ex eos dolore voluptatem tempora a. Ad, quo?',
        articleUrl: 'https://www.youtube.com/watch?v=sRA6caH7Wfg',
        created: '6 day',
    },
    {
        id:3,
        tittle: 'Barcelona',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem dignissimos a et vel veritatis, unde doloremque pariatur, fugiat officia soluta molestiae dolorum harum rerum impedit dolorem adipisci.',
        articleUrl: 'https://www.youtube.com/watch?v=sRA6caH7Wfg',
        created: '8 day',
    },
    {
        id:4,
        tittle: 'Barcelona',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem dignissimos a et vel veritatis, unde doloremque pariatur, fugiat officia soluta molestiae dolorum harum rerum impedit dolorem adipisci.',
        articleUrl: 'https://www.youtube.com/watch?v=sRA6caH7Wfg',
        created: '11 day',
    }
]

const Article = () => (
    <GridTemplate pageType='articles'>
   {articles.map(({id, content, articleUrl, created, tittle}) => 
        <Card 
        id={id}
            cardType='articles'
            tittle={tittle}
            content={content}
            articleUrl={articleUrl}
            created={created}
            key={id}
        />
   
   )}
    </GridTemplate>
   
);

export default Article;