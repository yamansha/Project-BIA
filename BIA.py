from flask import Flask, request, render_template
import itertools

app = Flask(__name__)

def knapsack(capacity, weights, values, n):
    K = [[0 for w in range(capacity + 1)] for i in range(n + 1)]

    for i in range(n + 1):
        for w in range(capacity + 1):
            if i == 0 or w == 0:
                K[i][w] = 0
            elif weights[i-1] <= w:
                K[i][w] = max(values[i-1] + K[i-1][w-weights[i-1]], K[i-1][w])
            else:
                K[i][w] = K[i-1][w]

    return K[n][capacity]

def traveling_salesman_problem(graph, s):
    V = len(graph)
    vertex = []

    for i in range(V):
        if i != s:
            vertex.append(i)

    min_path = float('inf')
    next_permutation = itertools.permutations(vertex)
    
    for perm in next_permutation:
        current_pathweight = 0
        k = s
        for j in perm:
            current_pathweight += graph[k][j]
            k = j
        current_pathweight += graph[k][s]
        min_path = min(min_path, current_pathweight)
        
    return min_path

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        try:
            capacity = int(request.form['capacity'])
            num_items = int(request.form['num_items'])
            weights = list(map(int, request.form.getlist('weights')))
            values = list(map(int, request.form.getlist('values')))
            num_addresses = int(request.form['num_addresses'])
            graph = [list(map(int, addr.split())) for addr in request.form.getlist('graph')]

            max_value = knapsack(capacity, weights, values, num_items)
            min_path = traveling_salesman_problem(graph, 0)

            return render_template('index.html', max_value=max_value, min_path=min_path)
        except Exception as e:
            return f"حدث خطأ: {e}"
    
    return render_template('index.html', max_value=None, min_path=None)

if __name__ == "_main_":
    app.run(debug=True)