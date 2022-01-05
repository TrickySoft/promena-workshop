/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import DataTableExtensions from 'react-data-table-component-extensions';
import DataTable from 'react-data-table-component';
import 'react-data-table-component-extensions/dist/index.css';
import Dropdown from '../dropdown';
import './index.scss';

const CommonDataTable = ({ tableData, columns, data, noHeader, pagination, highlightOnHover,
    keyField, tableTitle, isRequiredSearch }) => {

    const customStyles = {
        rows: {
            style: {
                textAlign: 'left',
                fontSize: '1.2rem',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: 1.57,
                letterSpacing: 'normal',
                color: '#121213',
            }
        },
        headCells: {
            style: {
                paddingLeft: '16px', // override the cell padding for head cells
                paddingRight: '8px',
                fontFamily: 'Montserrat SemiBold',
                fontWeight: 600,
                textAlign: 'left',
                fontSize: '1.2rem',
                cursor: 'pointer'
            },
        },
        cells: {
            style: {
                paddingLeft: '16px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
        pagination: {
            style: {
                color: '#121213',
            }
        },
        title: {
            style: {
                fontSize: '16px'
            }
        }
    };

    const options = [
        {
            value: 'title',
            label: 'Title'
        },
        {
            value: 'director',
            label: 'Director'
        },
        {
            value: 'year',
            label: 'year'
        },
    ];

    const handleValueChange = (event) => {
        console.log(event);
    }

    return (
        <div className='common-table__wrapper'>
            {isRequiredSearch ?
                <div>
                    <Dropdown
                        option={options}
                        onChange={(event) => {
                            handleValueChange(event);
                        }}
                        className='common-table__dropdown'
                        isRequired={true}
                        placeholder='Filter table data'
                    />
                    <DataTableExtensions {...tableData}>
                        <DataTable
                            columns={columns}
                            data={data}
                            noHeader={noHeader}
                            pagination={pagination}
                            highlightOnHover={highlightOnHover}
                            keyField={keyField}
                            title={tableTitle}
                            customStyles={customStyles}
                        />
                    </DataTableExtensions>
                </div>
                :
                <div>
                    <Dropdown
                        option={options}
                        onChange={(event) => {
                            handleValueChange(event);
                        }}
                        className='common-table__dropdown'
                        isRequired={true}
                        placeholder='Filter table data'
                    />
                    <DataTableExtensions {...tableData}>
                        <DataTable
                            columns={columns}
                            data={data}
                            noHeader={noHeader}
                            pagination={pagination}
                            highlightOnHover={highlightOnHover}
                            keyField={keyField}
                            title={tableTitle}
                            customStyles={customStyles}
                        />
                    </DataTableExtensions>
                </div>
            }
        </div >
    )
}

CommonDataTable.prototype = {
    noHeader: PropTypes.bool,
    pagination: PropTypes.bool,
    highlightOnHover: PropTypes.bool,
    columns: PropTypes.shape({}),
    tableData: PropTypes.shape({}),
    data: PropTypes.shape([]),
    keyField: PropTypes.string,
    striped: PropTypes.bool,
    pointerOnHover: PropTypes.bool,
    onRowClicked: PropTypes.func,
    tableTitle: PropTypes.string,
    isRequiredSearch: PropTypes.bool
}

CommonDataTable.defaultProps = {
    noHeader: false,
    pagination: false,
    highlightOnHover: false,
    columns: {},
    data: [],
    tableData: {},
    keyField: 'id',
    striped: false,
    pointerOnHover: false,
    onRowClicked: () => { },
    tableTitle: '',
    isRequiredSearch: false
}

export default React.memo(CommonDataTable);