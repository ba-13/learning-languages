import math
import random
import numpy as np
from micrograd.micrograd import Value


class Module:
    def zero_grad(self):
        for p in self.parameters():
            p.grad = 0.0

    def parameters(self):
        return []


class Neuron(Module):
    def __init__(self, nin, nonlin=True, layerNum="", neuronNum="") -> None:
        self.w = [
            Value(random.uniform(-1, 1), label=f"{layerNum}.{neuronNum}.{i}")
            for i in range(nin)
        ]
        self.b = Value(random.uniform(-1, 1), label=f"{layerNum}.{neuronNum}.b")
        self.nonlin = nonlin

    def __call__(self, x):
        # w * x + b
        act: Value = sum((wi * xi for wi, xi in zip(self.w, x)), self.b)
        if self.nonlin:
            out = act.relu()
        return out

    def parameters(self):
        return self.w + [self.b]

    def __repr__(self):
        return f"{'ReLU' if self.nonlin else 'Linear'}Neuron({len(self.w)})"


class Layer(Module):
    def __init__(self, nin, nout, layerNum="") -> None:
        self.neurons = [
            Neuron(nin, layerNum=layerNum, neuronNum=i) for i in range(nout)
        ]
        self.layerNum = layerNum

    def __call__(self, x):
        outs = [n(x) for n in self.neurons]
        return outs[0] if len(outs) == 1 else outs

    def parameters(self):
        return [p for neuron in self.neurons for p in neuron.parameters()]
        # note the comprehension direction
        # is similar to how outer loop and inner loop would be in a sequence

    def __repr__(self):
        return f"Layer of [{', '.join(str(n) for n in self.neurons)}]"


class MLP(Module):
    def __init__(self, nin, nouts: list) -> None:
        # nouts is dimension of outputs each layer has
        # nin is dimension of inputs
        sz = [nin] + nouts
        self.layers = [Layer(sz[i], sz[i + 1], i) for i in range(len(nouts))]

    def __call__(self, x):
        for layer in self.layers:
            x = layer(x)
        return x

    def parameters(self):
        return [p for layer in self.layers for p in layer.parameters()]

    def __repr__(self):
        return f"MLP of [{', '.join(str(layer) for layer in self.layers)}]"
