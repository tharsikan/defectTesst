import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
// import AllocationButton from './AllocationButton'
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs'
import Table from '../../components/tables/table'
import { Button } from 'semantic-ui-react';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import AddButton from './AddButton'

const columns = [
    {
       title: 'Project ID',
       dataIndex: 'project_id',
       filters: [
          {
             text: 'Joe',
             value: 'Joe',
          },
          {
             text: 'Jim',
             value: 'Jim',
          },
       ],
       // specify the condition of filtering result
       // here is that finding the name started with `value`
       onFilter: (value, record) => record.project_id.indexOf(value) === 0,
       sorter: (a, b) => a.project_id.length - b.project_id.length,
       sortDirections: ['descend'],
    },
    {
       title: 'Project Name',
       dataIndex: 'project_name',
       defaultSortOrder: 'descend',
       sorter: (a, b) => a.project_name - b.project_name,
    },
    {
       title: 'Type',
       dataIndex: 'type',
       defaultSortOrder: 'descend',
       sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Start Date',
      dataIndex: 'start_date',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
   },
   {
    title: 'End Date',
    dataIndex: 'end_date',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
 },
 {
  title: 'Duration',
  dataIndex: 'duration',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.age - b.age,
},
{
  title: 'Status',
  dataIndex: 'status',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.age - b.age,
},
{
  title: 'ConfigID',
  dataIndex: 'configid',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.age - b.age,
},
    {
       title: 'Action',
       dataIndex: 'action',
       defaultSortOrder: 'descend',
    },
    {
      title: 'View More',
      dataIndex: 'more',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
 ];
 const data = [
    {
       key: '1',
       project_id: 'John Brown',
       project_name:'hospital',
       type: 'John Brown',
       start_date: 'John Brown',
       end_date: 'John Brown',
       duration: 'John Brown',
       status: 'New York No. 1 Lake Park',
       configid:'gsgsg',
       action: <Button.Group>
          <Button secondary>Edit</Button>
          <Button.Or />
          <Button negative>Delete</Button>
       </Button.Group>,
       more:<MoreOutlinedIcon/>
    },
    {
       key: '2',
       name: 'Jim Green',
       age: 42,
       address: 'London No. 1 Lake Park',
       action: <Button.Group>
          <Button secondary>Edit<AddButton/></Button>
          <Button.Or />
          <Button negative>Delete</Button>
       </Button.Group>
    },
    {
       key: '3',
       name: 'Joe Black',
       age: 32,
       address: 'Sidney No. 1 Lake Park',
       action: <Button.Group>
          <Button secondary>Edit</Button>
          <Button.Or />
          <Button negative>Delete</Button>
       </Button.Group>
    },
    {
       key: '4',
       name: 'Jim Red',
       age: 32,
       address: 'London No. 2 Lake Park',
       action: <Button.Group>
          <Button secondary>Edit</Button>
          <Button.Or />
          <Button negative>Delete</Button>
       </Button.Group>
    },
 ];
export default class ProjectList extends Component {
    render() {
        return (
            <div>
                <Grid item xs={11} style={{ marginTop: '2%' }}>
                    <Segment>
                        <BreadCrumbs />
                       <AddButton/>
                        <Table column={columns} data={data}/>
                    </Segment>
                </Grid>
            </div>
        )
    }
}
