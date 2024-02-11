SUBDIRS:=clock  example graphics  music  opengl pong  renderwindow  thread  window

.PHONY: all clean run

all:
	for dir in $(SUBDIRS) ; \
	do \
		$(MAKE) -C $$dir ; \
	done


clean:
	for dir in $(SUBDIRS) ; \
	do \
		$(MAKE) -C $$dir clean; \
	done

run:
	for dir in $(SUBDIRS) ; \
	do \
		$(MAKE) -C $$dir run; \
	done
