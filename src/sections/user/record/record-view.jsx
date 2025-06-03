'use client'

import toast from 'react-hot-toast'
import { FaRegCopy } from 'react-icons/fa'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { DONATE_ACCOUNT } from '@/constants/common'
import { DataTablePro } from '@/components/dataTalePro'
import { formatNumberWithCommas } from '@/utils/format'
import historyService from '@/services/donate/history'

function RecordView() {
  // eslint-disable-next-line no-unused-vars
  const [dataList, setDataList] = useState([])

  const handleCopyButtonClick = useCallback(() => {
    navigator.clipboard.writeText(DONATE_ACCOUNT)
    toast.success('已複製')
  }, [])

  const columns = useMemo(
    () => [
      {
        header: '日期',
        accessorKey: 'donate_date',
        id: 'donate_date',
        width: 15,
        align: 'left',
        cell: ({ row }) => {
          return (
            <p className="mobile-regular-h5 text-dark-700 lg:desktop-regular-p">
              {row.original.donate_date}
            </p>
          )
        },
      },
      {
        header: '時間',
        accessorKey: 'donate_datetime',
        id: 'donate_datetime',
        width: 15,
        align: 'left',
        cell: ({ row }) => {
          return (
            <p className="mobile-regular-h5 text-dark-700 lg:desktop-regular-p">
              {row.original.donate_datetime}
            </p>
          )
        },
      },
      {
        header: '金額',
        accessorKey: 'amount',
        id: 'amount',
        width: 15,
        align: 'left',
        cell: ({ row }) => {
          return (
            <p className="mobile-regular-h5 text-primary-600 lg:desktop-regular-p">
              {`$${formatNumberWithCommas(row.original.amount)}`}
            </p>
          )
        },
      },
      {
        header: '捐款項目',
        accessorKey: 'item_name',
        id: 'item_name',
        width: 25,
        align: 'left',
        cell: ({ row }) => {
          return (
            <p className="mobile-regular-h5 text-dark-700 lg:desktop-regular-p">
              {row.original.item_name}
            </p>
          )
        },
      },
      {
        header: '捐款方式',
        accessorKey: 'pay_type_name',
        id: 'pay_type_name',
        width: 20,
        align: 'left',
        cell: ({ row }) => {
          return (
            <p className="mobile-regular-h5 text-dark-700 lg:desktop-regular-p">
              {row.original.pay_type_name}
            </p>
          )
        },
      },
      {
        header: '交易編號',
        accessorKey: 'trade_no',
        id: 'trade_no',
        width: 20,
        align: 'left',
        cell: ({ row }) => {
          return (
            <p className="mobile-regular-h5 text-dark-700 lg:desktop-regular-p">
              {row.original.trade_no}
            </p>
          )
        },
      },
      {
        header: '收據編號',
        accessorKey: 'recipt_no',
        id: 'recipt_no',
        width: 20,
        align: 'left',
        cell: ({ row }) => {
          return (
            <p className="mobile-regular-h5 text-dark-700 lg:desktop-regular-p">
              {row.original.recipt_no}
            </p>
          )
        },
      },
    ],
    []
  )

  const fetchData = useCallback(async () => {
    const payload = {
      Page: null,
      Limit: null,
    }
    const response = await historyService(payload)
    const {
      data: { list },
    } = response

    setDataList(list)
  }, [])

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="space-y-3">
      <div className="flex flex-col items-start">
        <p className="desktop-regular-p text-dark-900 lg:desktop-regular-p">
          銀行匯款指定專用帳戶：
        </p>
        <div className="flex gap-x-2 items-center">
          <button type="button" onClick={handleCopyButtonClick}>
            <FaRegCopy size={20} className="text-primary-500" />
          </button>
          <p
            role="button"
            className="mobile-regular-h5 text-dark-900 lg:desktop-regular-h6"
            onClick={handleCopyButtonClick}
          >
            {DONATE_ACCOUNT}
          </p>
        </div>
      </div>

      {/* Table Result */}
      <DataTablePro
        loading={false}
        headerRowSx={{
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          backgroundColor: '#5E9818',
          color: '#fff',
        }}
        tableMinWidth={1000}
        tbodyHeight={600}
        data={dataList}
        columns={columns}
        pageSizeList={[30, 50, 100]}
        defaultSortBy={[{ id: 'donate_datetime', desc: true }]}
      />
    </div>
  )
}

export default RecordView
