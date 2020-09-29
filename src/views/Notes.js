import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card'

const notes = [
    {
        tittle: 'Notatka 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem dignissimos a et vel veritatis, unde doloremque pariatur, fugiat officia soluta molestiae dolorum harum rerum impedit dolorem adipisci. Id, velit?At assumenda recusandae dolor sunt corporis libero ullam perspiciatis rem suscipit quod quidem, nulla, dolorum earum? Odit vero, eius accusamus numquam eaque ex eos dolore voluptatem tempora a. Ad, quo?',
        created: '11 day',
    },
    {
        tittle: 'Notatka 2',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem dignissimos a et vel veritatis, dolor sunt corporis libero ullam perspiciatis rem suscipit quod quidem, nulla, dolorum earum? Odit vero, eius accusamus numquam eaque ex eos dolore voluptatem tempora a. Ad, quo?',
        created: '16 day',
    },
    {
        tittle: 'Notatka 3',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem dignissimos a et vel veritatis, unde doloremque pariatur, fugiat officia soluta molestiae dolorum harum rerum impedit dolorem adipisci.',
        created: '18 day',
    }
]

const Notes = () => (
    <GridTemplate pageType='note'>
        {notes.map(({tittle, content, created}) => 
             <Card 
             cardType='note'
             tittle={tittle}
             content={content}
             created={created}
             key={tittle}
             />
 
            )}
    </GridTemplate>
 
);

export default Notes;