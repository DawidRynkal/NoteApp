import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const twitters = [
    {
        id:1,
        tittle: 'Cwiakala',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem dignissimos a et vel veritatis, unde doloremque pariatur, fugiat officia soluta molestiae dolorum harum rerum impedit dolorem adipisci. Id, velit?At assumenda recusandae dolor sunt corporis libero ullam perspiciatis rem suscipit quod quidem, nulla, dolorum earum? Odit vero, eius accusamus numquam eaque ex eos dolore voluptatem tempora a. Ad, quo?',
        twitterName:'cwiakala' ,
        created: '1 day',
    },
    {
        id:2,
        tittle: 'Boniek',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem dignissimos a et vel veritatis, dolor sunt corporis libero ullam perspiciatis rem suscipit quod quidem, nulla, dolorum earum? Odit vero, eius accusamus numquam eaque ex eos dolore voluptatem tempora a. Ad, quo?',
        twitterName: 'BoniekZibi',
        created: '6 day',
    },
    {
        id:3,
        tittle: 'Borek',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem dignissimos a et vel veritatis, unde doloremque pariatur, fugiat officia soluta molestiae dolorum harum rerum impedit dolorem adipisci.',
        twitterName: 'BorekMati',
        created: '8 day',
    },
    {
        id:4,
        tittle: 'Borek',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem dignissimos a et vel veritatis, unde doloremque pariatur, fugiat officia soluta molestiae dolorum harum rerum impedit dolorem adipisci.',
        twitterName: 'BorekMati',
        created: '8 day',
    }
]


const Twitter = () => (
    <GridTemplate pageType='twitters'> 
    {twitters.map(({id, tittle, content, twitterName, created}) => 
    <Card 
    id={id}
    cardType='twitters'
    tittle={tittle}
    content={content}
    twitterName={twitterName}
    created={created}
    key={id}
    />
    )}
    </GridTemplate>
   
);

export default Twitter;