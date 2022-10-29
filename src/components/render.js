import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Render extends Component {
  parseNodes() {
    var data = this.props.data;
    var nodes = [];
    Object.keys(data).forEach(obj => {
      for(var i in data[obj]) {
        const fromcheck = nodes.findIndex(object => object.name === data[obj][i].from);
        if (fromcheck === -1) {
          nodes.push({
            "name": data[obj][i].from,
            "x": Math.random(),
            "y": Math.random()
          });
        }
      }
    });

    Object.keys(data).forEach(obj => {
      for(var i in data[obj]) {
        const tocheck = nodes.findIndex(object => object.name === data[obj][i].to);
        if (tocheck === -1) {
          nodes.push({
            "name": data[obj][i].to,
            "x": Math.random(),
            "y": Math.random()
          });
        }
      }
    });

    return nodes
  }

  parseLinks() {
    var data = this.props.data;
    var edges = [];
    Object.keys(data).forEach(obj => {

      for(var i in data[obj]) {
        const edgecheck = edges.findIndex(object => this.haveSameData(data[obj][i], object));
        if (edgecheck === -1) {
          edges.push({
            "source": data[obj][i].from,
            "target": data[obj][i].to,
            "edge": data[obj][i].edge,
            "label": {
              "show": true,
              "formatter": function(d) {
                return d.data.edge;
              },
            },
            "lineStyle": {
              "curveness": 0.3
            },
          });
        }
      }
    });

    return edges
  }

  haveSameData(obj1, obj2) {
    const obj1Length = Object.keys(obj1).length;
    const obj2Length = Object.keys(obj2).length;

    if (obj1Length === obj2Length) {
      return Object.keys(obj1).every(
        key => obj2.hasOwnProperty(key)
        && obj2[key] === obj1[key]);
    }
    return false;
  }

  render() {
    return (
      <ReactEcharts
        style={{ height: '700px', width: '100%' }}
        option={{
          title: {
            text: 'Paths'
          },
          tooltip: {},
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'none',
              symbolSize: 50,
              roam: true,
              label: {
                show: true
              },
              edgeSymbol: ['circle', 'arrow'],
              edgeSymbolSize: [4, 10],
              edgeLabel: {
                fontSize: 10
              },
              data: this.parseNodes(),
              links: this.parseLinks(),
              lineStyle: {
                opacity: 0.9,
                width: 2,
                curveness: 0
              }
            }
          ]
        }}
      />
    );
  }
}
export default Render;

