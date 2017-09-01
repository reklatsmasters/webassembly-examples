#include <stdlib.h>

struct Node {
  struct Node* prev;
  struct Node* next;

  const unsigned char* data;
  int size;
};

// Insert Node after `parent`.
struct Node* LL_insert(struct Node* parent, const unsigned char* str, int size) {
  struct Node* ptr = (struct Node*) malloc(sizeof(struct Node));
  
  ptr->next = NULL;
  ptr->prev = parent;

  if (parent != NULL) {
    parent->next = ptr;
  }

  ptr->data = str;
  ptr->size = size;
  
  return ptr;
}

// Create first element.
struct Node* LL_create(const unsigned char* str, int size) {
  return LL_insert(NULL, str, size);
}

// Calc size of linked list.
unsigned int LL_length(struct Node* headptr) {
  if (headptr == NULL) {
    return 0;
  }
  
  unsigned int size = 1;
  struct Node* tmp = headptr;
  
  while(tmp->next != NULL) {
    ++size;
    tmp = tmp->next;
  }
  
  return size;
}

// Remove element `ptr` from linked list.
int LL_remove(struct Node* ptr) {
  if (ptr == NULL) {
    return 1;
  }
  
  if (ptr->prev != NULL) {
    ptr->prev->next = ptr->next;
  }
  
  if (ptr->next != NULL) {
    ptr->next->prev = ptr->prev;
  }
  
  free(ptr->data);
  free(ptr);
  
  return 0;
}

// Remove all elements from linked list.
int LL_clear(struct Node* head) {
  if (head == NULL) {
    return 1;
  }

  if (head->prev != NULL) {
    return -1;
  }

  struct Node* tmp = NULL;

  do {
    tmp = head;
    
    if (head != NULL) {
      head = head->next;
    }
  } while(LL_remove(tmp) == 0);

  return 0;
}

// Read data stored in `ptr`.
const unsigned char* LL_data(const struct Node* ptr) {
  if (ptr == NULL) {
    return NULL;
  }
  
  return ptr->data;
}

// Return size of stored string.
int LL_size(const struct Node* ptr) {
  if (ptr == NULL) {
    return NULL;
  }

  return ptr->size;
}

// Return previous node.
struct Node* LL_prev(const struct Node* ptr) {
  return (ptr != NULL) ? ptr->prev : NULL;
}

// Return next node.
struct Node* LL_next(const struct Node* ptr) {
  return (ptr != NULL) ? ptr->next : NULL;
}