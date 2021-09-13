const EmberServer = require('node-emberplus').EmberServer
const { ParameterType, FunctionArgument } = require('node-emberplus').EmberLib

const targets = [
    'trg1',
    'trg2',
    'trg3',
    'trg4',
    'trg5',
    'trg6',
    'trg7',
    'trg8',
    'trg9',
    'trg10',
    'trg11',
    'trg12',
    'trg13',
    'trg14',
    'trg15',
    'trg16',
    'trg17',
    'trg18',
    'trg19',
    'trg20',
    'trg21',
    'trg22',
    'trg23',
    'trg24',
    'trg25',
    'trg26',
    'trg27',
    'trg28',
    'trg29',
    'trg30',
    'trg31',
    'trg32',
    'trg33',
    'trg34',
    'trg35',
    'trg36',
    'trg37',
    'trg38',
    'trg39',
    'trg40',
    'trg41',
    'trg42',
    'trg43',
    'trg44',
    'trg45',
    'trg46',
    'trg47',
    'trg48',
    'trg49',
    'trg50',
    'trg51',
    'trg52',
    'trg53',
    'trg54',
    'trg55',
    'trg56',
    'trg57',
    'trg58',
    'trg59',
    'trg60',
    'trg61',
    'trg62',
    'trg63',
    'trg64',
    'trg65',
    'trg66',
    'trg67',
    'trg68',
    'trg69',
    'trg70',
    'trg71',
    'trg72',
    'trg73',
    'trg74',
    'trg75',
    'trg76',
    'trg77',
    'trg78',
    'trg79',
    'trg80',
    'trg81',
    'trg82',
    'trg83',
    'trg84',
    'trg85',
    'trg86',
    'trg87',
    'trg88',
    'trg89',
    'trg90',
    'trg91',
    'trg92',
    'trg93',
    'trg94',
    'trg95',
    'trg96',
    'trg97',
    'trg98',
    'trg99',
]
const sources = [
    'src1',
    'src2',
    'src3',
    'src4',
    'src5',
    'src6',
    'src7',
    'src8',
    'src9',
    'src10',
    'src11',
    'src12',
    'src13',
    'src14',
    'src15',
    'src16',
    'src17',
    'src18',
    'src19',
    'src20',
    'src21',
    'src22',
    'src23',
    'src24',
    'src25',
    'src26',
    'src27',
    'src28',
    'src29',
    'src30',
    'src31',
    'src32',
    'src33',
    'src34',
    'src35',
    'src36',
    'src37',
    'src38',
    'src39',
    'src40',
    'src41',
    'src42',
    'src43',
    'src44',
    'src45',
    'src46',
    'src47',
    'src48',
    'src49',
    'src50',
    'src51',
    'src52',
    'src53',
    'src54',
    'src55',
    'src56',
    'src57',
    'src58',
    'src69',
    'src60',
    'src61',
    'src62',
    'src63',
    'src64',
    'src65',
    'src66',
    'src67',
    'src68',
    'src69',
    'src70',
    'src71',
    'src72',
    'src73',
    'src74',
    'src75',
    'src76',
    'src77',
    'src78',
    'src79',
    'src80',
    'src81',
    'src82',
    'src83',
    'src84',
    'src85',
    'src86',
    'src87',
    'src88',
    'src89',
    'src90',
    'src91',
    'src92',
    'src93',
    'src94',
    'src95',
    'src96',
    'src97',
    'src98',
    'src99'
]
const defaultSources = [
    { identifier: 't-0', value: -1, access: 'readWrite' },
    { identifier: 't-1', value: 0, access: 'readWrite' },
    { identifier: 't-2', value: 0, access: 'readWrite' },
]
const labels = function (endpoints: any, type: any) {
    let labelArray = []
    for (let i = 0; i < endpoints.length; i++) {
        let endpoint = endpoints[i]
        let l = { identifier: `${type}-${i}` }
        if (endpoint) {
            //@ts-ignore
            l.value = endpoint
        }
        labelArray.push(l)
    }
    return labelArray
}

const buildConnections = function (s: any, t: any) {
    let connections = []
    for (let i = 0; i < t.length; i++) {
        connections.push({ target: `${i}` })
    }
    return connections
}
const jsonTree = [
    {
        // path "0"
        identifier: 'NDI Ember MTX',
        children: [
            {
                // path "0.0"
                identifier: 'identity',
                children: [
                    { identifier: 'product', value: 'NDI Ember MTX' },
                    {
                        identifier: 'Author',
                        value: 'Olzzon',
                        access: 'readWrite',
                    },
                ],
            },
            {
                // path "0.1"
                identifier: 'router',
                children: [
                    {
                        // path 0.1.0
                        identifier: 'NDIMatrix',
                        type: 'oneToN',
                        mode: 'linear',
                        targetCount: targets.length,
                        sourceCount: sources.length,
                        connections: buildConnections(sources, targets)
                    }
                ],
            },
        ],
    },
]
export const root = EmberServer.JSONtoTree(jsonTree)
