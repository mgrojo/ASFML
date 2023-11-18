SUBDIRS:=clock  example graphics  music  opengl pong  renderwindow  thread  window

all:
	for dir in $(SUBDIRS) ; \
	do \
		$(MAKE) -C $$dir ; \
	done

run:
	for dir in $(SUBDIRS) ; \
	do \
		$${dir}/main ; \
	done
