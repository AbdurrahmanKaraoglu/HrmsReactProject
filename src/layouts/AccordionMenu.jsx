import React, { Component } from 'react'
import { Accordion, Form, Menu,Container } from 'semantic-ui-react'

const ColorForm = (
    <Form>
        <Form.Group grouped>
            <Form.Checkbox label='Red' name='color' value='red' />
            <Form.Checkbox label='Orange' name='color' value='orange' />
            <Form.Checkbox label='Green' name='color' value='green' />
            <Form.Checkbox label='Blue' name='color' value='blue' />
        </Form.Group>
    </Form>
)


export default class AccordionMenu extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (

            <Accordion as={Menu} vertical>
                <Container>


                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 0}
                            content='Type of Employment'
                            index={0}
                            onClick={this.handleClick}
                        />
                        <Accordion.Content active={activeIndex === 0} content={ColorForm} />
                    </Menu.Item>

                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 1}
                            content='Seniority Level'
                            index={1}
                            onClick={this.handleClick}
                        />
                        <Accordion.Content active={activeIndex === 1} content={ColorForm} />
                    </Menu.Item>
                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 2}
                            content='Salary Range'
                            index={2}
                            onClick={this.handleClick}
                        />
                        <Accordion.Content active={activeIndex === 2} content={ColorForm} />
                    </Menu.Item>
                </Container>
            </Accordion>
        )
    }
}
