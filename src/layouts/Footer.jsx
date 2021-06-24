import React from 'react'
import { Container, Icon } from 'semantic-ui-react';
export default function Footer() {
    return (
        <Container>
        <div className='my-footer'>
          <hr />
          <span>Made by Abdurrahman Karaoglu - 2021</span>
          <a
            href='https://github.com/AbdurrahmanKaraoglu'
            target='_blank'
            rel='noopener noreferrer'
            className='my-footer-link mr-2'
          >
            <Icon name='github' size='big' />
          </a>
          <a
            href='https://www.linkedin.com/in/abdurrahman-karaoglu-405369207/'
            target='_blank'
            rel='noopener noreferrer'
            className='my-footer-link mr-2'
          >
            <Icon name='linkedin' size='big' link />
          </a>
        </div>
      </Container>
    )
}
