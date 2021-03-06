export const data = [
  {
    id: 1,
    name: 'A1',
    surname: 'B',
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 0,
    sex: 'Male',
    type: 'adult',
    insertDateTime: '1994-11-23T08:15:30-05:00',
    time: new Date(1900, 1, 1, 14, 23, 35),
  },
  {
    id: 2,
    name: 'A2',
    surname: 'B',
    isMarried: false,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: 'Female',
    type: 'adult',
    insertDateTime: '1994-11-05T13:15:30Z',
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 1,
  },
  {
    id: 3,
    name: 'A3',
    surname: 'B',
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: 'Female',
    type: 'child',
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 1,
  },
  {
    id: 4,
    name: 'A4',
    surname: 'Dede Dede Dede Dede Dede Dede Dede Dede',
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: 'Female',
    type: 'child',
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 3,
  },
  {
    id: 5,
    name: 'A5',
    surname: 'C',
    isMarried: false,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: 'Female',
    type: 'child',
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
  },
  {
    id: 6,
    name: 'A6',
    surname: 'C',
    isMarried: true,
    birthDate: new Date(1989, 1, 1),
    birthCity: 34,
    sex: 'Female',
    type: 'child',
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 5,
  },
];

export const columns = [
  {
    title: 'Adı',
    field: 'name',
    filterPlaceholder: 'Adı filter',
    tooltip: 'This is tooltip text',
  },
  {
    width: 200,
    title: 'Soyadı',
    field: 'surname',
    initialEditValue: 'test',
    tooltip: 'This is tooltip text',
  },
  { title: 'Evli', field: 'isMarried' },
  { title: 'Cinsiyet', field: 'sex', disableClick: true, editable: 'onAdd' },
  { title: 'Tipi', field: 'type', removable: false, editable: 'never' },
  { title: 'Doğum Yılı', field: 'birthDate', type: 'date' },
  {
    title: 'Doğum Yeri',
    field: 'birthCity',
    lookup: { 34: 'İstanbul', 0: 'Şanlıurfa' },
  },
  { title: 'Kayıt Tarihi', field: 'insertDateTime', type: 'datetime' },
  { title: 'Zaman', field: 'time', type: 'time' },
  {
    title: 'Adı',
    field: 'name',
    filterPlaceholder: 'Adı filter',
    tooltip: 'This is tooltip text',
  },
];

export const remoteColumns = [
  {
    title: 'Avatar',
    field: 'avatar',
    render: (rowData) => (
      <img style={{ height: 36, borderRadius: '50%' }} src={rowData.avatar} />
    ),
    tooltip: 'delakjdslkjdaskljklsdaj',
  },
  { title: 'Id', field: 'id' },
  { title: 'First Name', field: 'first_name', defaultFilter: 'De' },
  { title: 'Last Name', field: 'last_name' },
];
