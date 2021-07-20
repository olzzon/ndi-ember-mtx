const EmberServer = require('node-emberplus').EmberServer
const { ParameterType, FunctionArgument } = require('node-emberplus').EmberLib

const targets = [
    'tgt1',
    'tgt2',
    'tgt3',
    'tgt4',
    'tgt5',
    'tgt6',
    'tgt7',
    'tgt8',
    'tgt9',
    'tgt10',
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
]
const defaultSources = [
    { identifier: 't-0', value: -1, access: 'readWrite' },
    { identifier: 't-1', value: 0, access: 'readWrite' },
    { identifier: 't-2', value: 0, access: 'readWrite' },
]
const labels = function (endpoints, type) {
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

const buildConnections = function (s, t) {
    let connections = []
    for (let i = 0; i < t.length; i++) {
        connections.push({ target: `${i}` })
    }
    return connections
}
const jsonTree = [
    {
        // path "0"
        identifier: 'Sofie Portal',
        children: [
            {
                // path "0.0"
                identifier: 'identity',
                children: [
                    { identifier: 'product', value: 'Sofie Portal' },
                    {
                        identifier: 'company',
                        value: 'TV2 DK',
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
                        identifier: 'PortalMatrix',
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
