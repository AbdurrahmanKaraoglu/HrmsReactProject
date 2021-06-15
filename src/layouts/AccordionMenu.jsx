import React, { Component } from 'react'
import { Accordion, Form, Menu } from 'semantic-ui-react'


const JobsForm = (
    <Form>
        <Form.Group grouped>
            <Form.Checkbox label='Full Time Jobs' name='jobs' value='fulltimejobs' />
            <Form.Checkbox label='Part Time Jobs' name='jobs' value='parttimejobs' />
            <Form.Checkbox label='Remote Jobs' name='jobs' value='remotejobs' />
            <Form.Checkbox label='Internship Jobs' name='jobs' value='internshipjobs' />
            <Form.Checkbox label='Contract' name='jobs' value='contract' />
            <Form.Checkbox label='Training Jobs' name='jobs' value='trainingjobs' />
        </Form.Group>
    </Form>
)
const LevelForm = (
    <Form>
        <Form.Group grouped>
            <Form.Checkbox label='Student Level' name='level' value='studentlevel' />
            <Form.Checkbox label='Entry Level' name='level' value='entrylevel' />
            <Form.Checkbox label='Mid Level' name='level' value='midlevel' />
            <Form.Checkbox label='Senior Level' name='level' value='seniorlevel' />
            <Form.Checkbox label='Directors' name='level' value='directors' />
            <Form.Checkbox label='VP or Above' name='level' value='vporabove' />
        </Form.Group>
    </Form>
)
const SalaryForm = (
    <Form>
        <Form.Group grouped>
            <Form.Checkbox label='$700 - $1000' name='salary' value='$700-$1000salary' />
            <Form.Checkbox label='$1000 - $1200' name='salary' value='$1000-$1200salary' />
            <Form.Checkbox label='$1200 - $1400' name='salary' value='$1200-$1400salary' />
            <Form.Checkbox label='$1400 - $1600' name='salary' value='$1400-$1600salary' />
            <Form.Checkbox label='$1600 - $1800' name='salary' value='$1600-$1800salary' />
            <Form.Checkbox label='$1800 - $2000' name='salary' value='$1800-$2000salary' />
            <Form.Checkbox label='$2000 - $2500' name='salary' value='$2000-$2500salary' />
            <Form.Checkbox label='$2500 - $3000' name='salary' value='$2500-$3000salary' />
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
            <Accordion as={Menu} vertical >    
            
                <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 0}
                            content='Type of Employment'
                            index={0}
                            onClick={this.handleClick}
                        />
                        <Accordion.Content active={activeIndex === 0} content={JobsForm} />
                    </Menu.Item>
                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 1}
                            content='Seniority Level'
                            index={1}
                            onClick={this.handleClick}
                        />
                        <Accordion.Content active={activeIndex === 1} content={LevelForm} />
                    </Menu.Item>
                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 2}
                            content='Salary Range'
                            index={2}
                            onClick={this.handleClick}
                        />
                        <Accordion.Content active={activeIndex === 2} content={SalaryForm} />
                    </Menu.Item>     
            </Accordion>
        )
    }
}