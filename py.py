import numpy as np
import matplotlib.pyplot as plt


def translasi(titik, dx, dy):
    # Melakukan translasi pada setiap titik
    titik_tertranslasi = titik + np.array([dx, dy])
    return titik_tertranslasi


# Definisi titik awal A(2, 3)
A = np.array([2, 3])

# Menentukan nilai translasi (dx dan dy)
dx, dy = 4, 2

# Menampilkan titik awal A pada plot
plt.subplot(121)
plt.scatter(A[0], A[1], color='r', label='Titik Awal A(2,3)')
plt.title('Titik Awal A(2,3)')

# Melakukan translasi pada titik A
A_tertranslasi = translasi(A, dx, dy)

# Menampilkan titik A setelah translasi pada plot
plt.subplot(122)
plt.scatter(A_tertranslasi[0], A_tertranslasi[1],
            color='b', label='Titik Setelah Translasi')
plt.title('Titik Setelah Translasi')

# Menampilkan plot
plt.show()
