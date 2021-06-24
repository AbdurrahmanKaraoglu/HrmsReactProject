import React, { useState, useEffect } from 'react'
import { Icon, Table, Menu } from 'semantic-ui-react'
import EmpoleyerService from '../services/employerService';
import { Link } from 'react-router-dom';

export default function EmployerList() {
    const [employers, setEmployers] = useState([]);
    useEffect(() => {
        let empoleyerService = new EmpoleyerService();
        empoleyerService.getEmployer().then(result => setEmployers(result.data.data))
    }, [])
    console.log(employers);
    return (
        <div>
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İd</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Web Address</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map(employer => (
                            <Table.Row key={employer.id}>
                                <Table.Cell>{employer.id}</Table.Cell>
                                <Table.Cell>{employer.email}</Table.Cell>
                                <Table.Cell> <Link to={`/activejobpostingsofafirms/${employer.companyName}`}>{employer.companyName} </Link></Table.Cell>
                                <Table.Cell>{employer.webAddress}</Table.Cell>
                                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
