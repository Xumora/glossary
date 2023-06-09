export interface Word {
    title: string,
    description: string
}

export const enWords = [
    {
        title: "Accuracy",
        description: "Percentage of correct predictions made by the model."
    },
    {
        title: "Algorithm",
        description: "A method, function, or series of instructions used to generate a machine learning model. Examples include linear regression, decision trees, support vector machines, and neural networks."
    },
    {
        title: 'Bias term',
        description: "Allow models to represent patterns that do not pass through the origin. For example, if all my features were 0, would my output also be zero? Is it possible there is some base value upon which my features have an effect? Bias terms typically accompany weights and are attached to neurons or filters."
    },
    {
        title: "Categorical Variables",
        description: "Variables with a discrete set of possible values. Can be ordinal (order matters) or nominal (order doesn’t matter)."
    },
    {
        title: "Classification Threshold",
        description: "The lowest probability value at which we’re comfortable asserting a positive classification. For example, if the predicted probability of being diabetic is > 50%, return True, otherwise return False."
    },
    {
        title: 'Clustering',
        description: "Unsupervised grouping of data into buckets."
    },
    {
        title: 'Continuous Variables',
        description: "Variables with a range of possible values defined by a number scale (e.g. sales, lifespan)."
    },
    {
        title: 'Convergence',
        description: "A state reached during the training of a model when the loss changes very little between each iteration."
    },
    {
        title: 'Dimension',
        description: "Dimension for machine learning and data scientist is different from physics. Here, dimension of data means how many features you have in your data ocean(data-set). e.g in case of object detection application, flatten image size and color channel(e.g 28*28*3) is a feature of the input set. In case of house price prediction (maybe) house size is the data-set so we call it 1 dimentional data."
    },
    {
        title: 'Epoch',
        description: "An epoch describes the number of times the algorithm sees the entire data set."
    },
    {
        title: 'Extrapolation',
        description: "Making predictions outside the range of a dataset. E.g. My dog barks, so all dogs must bark. In machine learning we often run into trouble when we extrapolate outside the range of our training data."
    },
    {
        title: 'Feature',
        description: "With respect to a dataset, a feature represents an attribute and value combination. Color is an attribute. “Color is blue” is a feature. In Excel terms, features are similar to cells. The term feature has other definitions in different contexts."
    },
    {
        title: 'Feature Selection',
        description: "Feature selection is the process of selecting relevant features from a data-set for creating a Machine Learning model."
    },
    {
        title: 'Feature Vector',
        description: "A list of features describing an observation with multiple attributes. In Excel we call this a row."
    },
    {
        title: 'Gradient Accumulation',
        description: "A mechanism to split the batch of samples—used for training a neural network—into several mini-batches of samples that will be run sequentially. This is used to enable using large batch sizes that require more GPU memory than available."
    },
    {
        title: 'Hyperparameters',
        description: "Hyperparameters are higher-level properties of a model such as how fast it can learn (learning rate) or complexity of a model. The depth of trees in a Decision Tree or number of hidden layers in a Neural Networks are examples of hyper parameters."
    },
    {
        title: 'Induction',
        description: "A bottoms-up approach to answering questions or solving problems. A logic technique that goes from observations to theory. E.g. We keep observing X, so we infer that Y must be True."
    },
    {
        title: 'Instance',
        description: "A data point, row, or sample in a dataset. Another term for observation."
    },
    {
        title: 'Label',
        description: "The “answer” portion of an observation in supervised learning. For example, in a dataset used to classify flowers into different species, the features might include the petal length and petal width, while the label would be the flower’s species."
    },
    {
        title: 'Loss',
        description: "Loss = true_value(from data-set)- predicted value(from ML-model) The lower the loss, the better a model (unless the model has over-fitted to the training data). The loss is calculated on training and validation and its interpretation is how well the model is doing for these two sets. Unlike accuracy, loss is not a percentage. It is a summation of the errors made for each example in training or validation sets."
    },
    {
        title: 'Machine Learning',
        description: "Mitchell (1997) provides a succinct definition: “A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E.” In simple language machine learning is a field in which human made algorithms have an ability learn by itself or predict future for unseen data."
    },
    {
        title: 'Model',
        description: "A data structure that stores a representation of a dataset (weights and biases). Models are created/learned when you train an algorithm on a dataset."
    },
    {
        title: 'Neural Networks',
        description: "Neural Networks are mathematical algorithms modeled after the brain’s architecture, designed to recognize patterns and relationships in data."
    },
    {
        title: 'Null Accuracy',
        description: "Baseline accuracy that can be achieved by always predicting the most frequent class (“B has the highest frequency, so lets guess B every time”)."
    },
    {
        title: 'Overfitting',
        description: "Overfitting occurs when your model learns the training data too well and incorporates details and noise specific to your dataset. You can tell a model is overfitting when it performs great on your training/validation set, but poorly on your test set (or new real-world data)."
    },
    {
        title: 'Regression',
        description: "Predicting a continuous output (e.g. price, sales)."
    },
    {
        title: 'Underfitting',
        description: "Underfitting occurs when your model over-generalizes and fails to incorporate relevant variations in your data that would give your model more predictive power. You can tell a model is underfitting when it performs poorly on both training and test sets."
    },
    {
        title: 'Validation Set',
        description: "A set of observations used during model training to provide feedback on how well the current parameters generalize beyond the training set. If training error decreases but validation error increases, your model is likely overfitting and you should pause training."
    }
]

export const ruWords = [
    {
        title: "Точность",
        description: "Процент правильных прогнозов, сделанных моделью."
    },
    {
        title: "Алгоритм",
        description: "Метод, функция или последовательность инструкций, используемые для создания модели машинного обучения. Примеры включают линейную регрессию, деревья решений, машины опорных векторов и нейронные сети."
    },
    {
        title: 'Термин смещения',
        description: "Разрешает моделям представлять шаблоны, которые не проходят через исходную точку. Например, если бы все мои функции были равны 0, был бы мой вывод также равен нулю? Возможно ли, что существует какое-то базовое значение, на которое влияют мои функции? Термины смещения обычно сопровождают веса и привязаны к нейронам или фильтрам."
    },
    {
        title: "Категориальные переменные",
        description: "Переменные с дискретным набором возможных значений. Может быть порядковым (порядок имеет значение) или номинальным (порядок не имеет значения)."
    },
    {
        title: "Порог классификации",
        description: "Наименьшее значение вероятности, при котором нам удобно утверждать о положительной классификации. Например, если прогнозируемая вероятность заболеть диабетом составляет > 50%, верните значение True, в противном случае верните значение False."
    },
    {
        title: 'Кластеризация',
        description: "Неконтролируемая группировка данных по сегментам."
    },
    {
        title: 'Непрерывные переменные',
        description: "Переменные с диапазоном возможных значений, определяемых числовой шкалой (например, продажи, продолжительность жизни)."
    },
    {
        title: 'Конвергенция',
        description: "Состояние, достигаемое во время обучения модели, когда потери очень мало меняются между каждой итерацией."
    },
    {
        title: 'Измерение',
        description: "Измерение для машинного обучения и data scientist отличается от физики. Здесь размерность данных означает, сколько функций у вас есть в вашем океане данных (наборе данных). Например, в случае приложения для обнаружения объектов уменьшите размер изображения и цветовой канал (например 28*28*3 ) является особенностью входного набора. В случае прогнозирования цены на жилье (может быть) размер дома - это набор данных, поэтому мы называем его 1-мерными данными."
    },
    {
        title: 'Эпоха',
        description: "Эпоха описывает количество раз, когда алгоритм просматривает весь набор данных."
    },
    {
        title: 'Экстраполяция',
        description: "Делать прогнозы за пределами диапазона набора данных. Например, моя собака лает, поэтому все собаки должны лаять. В машинном обучении мы часто сталкиваемся с проблемами, когда экстраполируем данные за пределы наших обучающих данных."
    },
    {
        title: 'Особенность',
        description: "По отношению к набору данных объект представляет собой комбинацию атрибута и значения. Цвет - это атрибут. Цвет синий - это особенность. В терминах Excel объекты аналогичны ячейкам. Термин функция имеет другие определения в различных контекстах."
    },
    {
        title: 'Выбор функции',
        description: "Выбор объектов - это процесс выбора релевантных объектов из набора данных для создания модели машинного обучения."
    },
    {
        title: 'Вектор объектов',
        description: "Список объектов, описывающих наблюдение с несколькими атрибутами. В Excel мы называем это строкой."
    },
    {
        title: 'Накопление градиента',
        description: "Механизм разделения пакета выборок, используемого для обучения нейронной сети, на несколько мини—пакетов выборок, которые будут запускаться последовательно. Это используется для обеспечения возможности использования пакетов больших размеров, для которых требуется больше памяти графического процессора, чем доступно."
    },
    {
        title: 'Гиперпараметры',
        description: "Гиперпараметры - это свойства модели более высокого уровня, такие как скорость ее обучения (learning rate) или сложность модели. Глубина деревьев в дереве решений или количество скрытых слоев в нейронных сетях являются примерами гиперпараметров."
    },
    {
        title: 'Индукционный',
        description: "Подход снизу вверх к ответам на вопросы или решению проблем. Логический прием, который переходит от наблюдений к теории. Например, мы продолжаем наблюдать X, поэтому делаем вывод, что Y должно быть истинным."
    },
    {
        title: 'Пример',
        description: "Точка данных, строка или выборка в наборе данных. Еще один термин, обозначающий наблюдение."
    },
    {
        title: 'Этикетка',
        description: "Часть наблюдения “ответ” в процессе обучения под наблюдением. Например, в наборе данных, используемом для классификации цветов по различным видам, признаки могут включать длину и ширину лепестка, в то время как меткой будет вид цветка."
    },
    {
        title: 'Потеря',
        description: "Потеря = true_value(из набора данных) - прогнозируемое значение(из ML-модели) Чем меньше потери, тем лучше модель (если только модель не была чрезмерно подогнана под обучающие данные). Потери рассчитываются при обучении и валидации, и их интерпретация заключается в том, насколько хорошо работает модель для этих двух наборов. В отличие от точности, потери не измеряются в процентах. Это суммирование ошибок, допущенных для каждого примера в обучающих или проверочных наборах."
    },
    {
        title: 'Машинное обучение',
        description: "Митчелл (1997) дает краткое определение: “Говорят, что компьютерная программа учится на опыте E в отношении некоторого класса задач T и измеряет производительность P, если ее производительность в задачах из T, измеряемая с помощью P, улучшается с опытом E.” Простым языком машинное обучение - это область в какие созданные человеком алгоритмы обладают способностью обучаться самостоятельно или предсказывать будущее по невидимым данным."
    },
    {
        title: 'Модель',
        description: "Структура данных, в которой хранится представление набора данных (веса и смещения). Модели создаются / изучаются, когда вы обучаете алгоритм на наборе данных."
    },
    {
        title: 'Нейронные сети',
        description: "Нейронные сети - это математические алгоритмы, смоделированные по архитектуре мозга и предназначенные для распознавания закономерностей и взаимосвязей в данных."
    },
    {
        title: 'Нулевая точность',
        description: "Базовая точность, которая может быть достигнута путем постоянного прогнозирования наиболее часто встречающегося класса (“B имеет самую высокую частоту, поэтому давайте каждый раз угадывать B”)."
    },
    {
        title: 'Переоснащение',
        description: "Переобучение происходит, когда ваша модель слишком хорошо усваивает обучающие данные и включает в себя детали и шум, характерные для вашего набора данных. Вы можете сказать, что модель переобучается, когда она отлично справляется с вашим обучающим / проверочным набором, но плохо с вашим тестовым набором (или новыми реальными данными)."
    },
    {
        title: 'Регрессия',
        description: "Прогнозирование непрерывного объема производства (например, цены, продаж)."
    },
    {
        title: 'Недостаточная подгонка',
        description: "Недостаточная подгонка происходит, когда ваша модель чрезмерно обобщается и не учитывает соответствующие изменения в ваших данных, которые придали бы вашей модели большую прогностическую силу. Вы можете сказать, что модель недостаточно подходит, когда она плохо работает как на обучающих, так и на тестовых наборах."
    },
    {
        title: 'Набор для проверки',
        description: "Набор наблюдений, используемый во время обучения модели для обеспечения обратной связи о том, насколько хорошо текущие параметры обобщаются за пределами обучающего набора. Если ошибка обучения уменьшается, но ошибка проверки увеличивается, ваша модель, скорее всего, переобучается, и вам следует приостановить обучение."
    }
]