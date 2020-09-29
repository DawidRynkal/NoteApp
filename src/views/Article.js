import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const articles = [
    {
        tittle: 'React is great!!',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem dignissimos a et vel veritatis, unde doloremque pariatur, fugiat officia soluta molestiae dolorum harum rerum impedit dolorem adipisci. Id, velit?At assumenda recusandae dolor sunt corporis libero ullam perspiciatis rem suscipit quod quidem, nulla, dolorum earum? Odit vero, eius accusamus numquam eaque ex eos dolore voluptatem tempora a. Ad, quo?',
        articleUrl: 'https://www.youtube.com/watch?v=sRA6caH7Wfg',
        created: '1 day',
    },
    {
        tittle: 'My mind is gone..',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem dignissimos a et vel veritatis, dolor sunt corporis libero ullam perspiciatis rem suscipit quod quidem, nulla, dolorum earum? Odit vero, eius accusamus numquam eaque ex eos dolore voluptatem tempora a. Ad, quo?',
        articleUrl: 'https://www.youtube.com/watch?v=sRA6caH7Wfg',
        created: '6 day',
    },
    {
        tittle: 'Barcelona',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem dignissimos a et vel veritatis, unde doloremque pariatur, fugiat officia soluta molestiae dolorum harum rerum impedit dolorem adipisci.',
        articleUrl: 'https://www.youtube.com/watch?v=sRA6caH7Wfg',
        created: '8 day',
    }
]

const Article = () => (
    <GridTemplate pageType='article'>
   {articles.map(({content, articleUrl, created, tittle}) => 
        <Card 
            cardType='article'
            tittle={tittle}
            content={content}
            articleUrl={articleUrl}
            created={created}
            key={tittle}
        />
   
   )}
    </GridTemplate>
   
);

export default Article;